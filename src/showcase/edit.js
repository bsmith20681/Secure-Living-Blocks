import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import {
	RichText,
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import {
	PanelBody,
	RangeControl,
	Button,
	TextControl,
} from "@wordpress/components";
import "./editor.scss";

/**
 * Star Rating Component
 * Displays star rating based on numeric score (0.1-5.0)
 */
function StarRating({ rating }) {
	const fullStars = Math.floor(rating);
	const hasPartialStar = rating % 1 !== 0;
	const partialStarPercent = (rating % 1) * 100;
	const emptyStars = 5 - Math.ceil(rating);

	const starPath =
		"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

	return (
		<div
			className="showcase-star-rating"
			aria-label={`${rating} out of 5 stars`}
		>
			{/* Full stars */}
			{[...Array(fullStars)].map((_, i) => (
				<svg
					key={`full-${i}`}
					width="20"
					height="20"
					viewBox="0 0 24 24"
					className="star star-full"
				>
					<path d={starPath} fill="currentColor" />
				</svg>
			))}

			{/* Partial star */}
			{hasPartialStar && (
				<svg
					key="partial"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					className="star star-partial"
				>
					<defs>
						<linearGradient id={`star-gradient-${rating}`}>
							<stop
								offset={`${partialStarPercent}%`}
								stopColor="currentColor"
							/>
							<stop offset={`${partialStarPercent}%`} stopColor="#e0e0e0" />
						</linearGradient>
					</defs>
					<path d={starPath} fill={`url(#star-gradient-${rating})`} />
				</svg>
			)}

			{/* Empty stars */}
			{[...Array(emptyStars)].map((_, i) => (
				<svg
					key={`empty-${i}`}
					width="20"
					height="20"
					viewBox="0 0 24 24"
					className="star star-empty"
				>
					<path d={starPath} fill="#e0e0e0" />
				</svg>
			))}
		</div>
	);
}

/**
 * Carousel Component
 * Handles image upload and navigation
 */
function CarouselEditor({ images, onSelectImages, onRemoveImage }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = () => {
		setActiveIndex((current) => Math.max(0, current - 1));
	};

	const handleNext = () => {
		setActiveIndex((current) => Math.min(images.length - 1, current + 1));
	};

	if (images.length === 0) {
		return (
			<MediaPlaceholder
				icon="format-gallery"
				labels={{
					title: __("Carousel Images", "showcase"),
					instructions: __(
						"Upload up to 5 images for the carousel",
						"showcase",
					),
				}}
				onSelect={(media) => {
					const selectedImages = Array.isArray(media) ? media : [media];
					const limitedImages = selectedImages.slice(0, 5).map((img) => ({
						id: img.id,
						url: img.url,
						alt: img.alt || "",
					}));
					onSelectImages(limitedImages);
				}}
				accept="image/*"
				allowedTypes={["image"]}
				multiple={true}
			/>
		);
	}

	return (
		<div className="showcase-carousel-editor">
			{/* Main Image Display */}
			<div className="carousel__main">
				<img
					src={images[activeIndex]?.url}
					alt={images[activeIndex]?.alt || ""}
				/>

				{/* Navigation Arrows */}
				{images.length > 1 && (
					<>
						<button
							className="carousel__arrow carousel__prev"
							onClick={handlePrev}
							disabled={activeIndex === 0}
							aria-label={__("Previous image", "showcase")}
						>
							‹
						</button>
						<button
							className="carousel__arrow carousel__next"
							onClick={handleNext}
							disabled={activeIndex === images.length - 1}
							aria-label={__("Next image", "showcase")}
						>
							›
						</button>
					</>
				)}
			</div>

			{/* Thumbnail Strip */}
			<div className="carousel__thumbnails">
				{images.map((image, index) => (
					<div
						key={image.id}
						className={`carousel__thumbnail ${
							index === activeIndex ? "active" : ""
						}`}
						onClick={() => setActiveIndex(index)}
					>
						<img src={image.url} alt="" />
						<button
							className="remove-image"
							onClick={(e) => {
								e.stopPropagation();
								onRemoveImage(index);
								if (activeIndex >= index && activeIndex > 0) {
									setActiveIndex(activeIndex - 1);
								}
							}}
							aria-label={__("Remove image", "showcase")}
						>
							×
						</button>
					</div>
				))}

				{/* Add More Button (if < 5 images) */}
				{images.length < 5 && (
					<MediaUpload
						onSelect={(media) => {
							const newImages = Array.isArray(media) ? media : [media];
							const mappedImages = newImages.map((img) => ({
								id: img.id,
								url: img.url,
								alt: img.alt || "",
							}));
							const combined = [...images, ...mappedImages];
							onSelectImages(combined.slice(0, 5));
						}}
						allowedTypes={["image"]}
						multiple={true}
						render={({ open }) => (
							<button
								className="carousel__add-more"
								onClick={open}
								aria-label={__("Add more images", "showcase")}
							>
								+
							</button>
						)}
					/>
				)}
			</div>
		</div>
	);
}

/**
 * Feature Tags Editor Component
 * Allows adding/removing simple text tags (pills/badges)
 */
function FeatureTagsEditor({ featureTags, onChange }) {
	const addTag = () => {
		onChange([...featureTags, ""]);
	};

	const updateTag = (index, value) => {
		const updated = [...featureTags];
		updated[index] = value;
		onChange(updated);
	};

	const removeTag = (index) => {
		onChange(featureTags.filter((_, i) => i !== index));
	};

	return (
		<div className="showcase-feature-tags-editor">
			<h4>{__("Feature Tags", "showcase")}</h4>
			<div className="feature-tags-list">
				{featureTags.map((tag, index) => (
					<div key={index} className="feature-tag-item">
						<TextControl
							value={tag}
							onChange={(value) => updateTag(index, value)}
							placeholder={__("e.g. 24x7 Monitoring", "showcase")}
						/>
						<Button isDestructive isSmall onClick={() => removeTag(index)}>
							{__("Remove", "showcase")}
						</Button>
					</div>
				))}
			</div>
			<Button isPrimary onClick={addTag}>
				{__("Add Tag", "showcase")}
			</Button>
		</div>
	);
}

/**
 * Features Editor Component
 * Allows adding/removing features (always uses checkmark icon)
 */
function FeaturesEditor({ features, onChange }) {
	const addFeature = () => {
		onChange([...features, { icon: "yes", text: "" }]);
	};

	const updateFeature = (index, value) => {
		const updated = [...features];
		updated[index].text = value;
		updated[index].icon = "yes"; // Always use checkmark
		onChange(updated);
	};

	const removeFeature = (index) => {
		onChange(features.filter((_, i) => i !== index));
	};

	return (
		<div className="showcase-features-editor">
			<h4>{__("Features", "showcase")}</h4>
			{features.map((feature, index) => (
				<div key={index} className="feature-item-editor">
					<span className="dashicons dashicons-yes"></span>
					<RichText
						tagName="span"
						value={feature.text}
						onChange={(value) => updateFeature(index, value)}
						placeholder={__("Feature text...", "showcase")}
					/>
					<Button isDestructive isSmall onClick={() => removeFeature(index)}>
						{__("Remove", "showcase")}
					</Button>
				</div>
			))}
			<Button isPrimary onClick={addFeature}>
				{__("Add Feature", "showcase")}
			</Button>
		</div>
	);
}

export default function Edit({ attributes, setAttributes }) {
	const {
		topSectionText,
		rating,
		carouselImages,
		serviceName,
		featureTags,
		features,
		specialOfferTitle,
		specialOfferDescription,
		specialOfferUrl,
		primaryButtonText,
		primaryButtonUrl,
		phoneButtonText,
		phoneNumber,
		videoButtonText,
		videoButtonUrl,
		reviewButtonText,
		reviewButtonUrl,
	} = attributes;

	// Carousel handlers
	const handleSelectImages = (images) => {
		setAttributes({ carouselImages: images });
	};

	const handleRemoveImage = (index) => {
		const updatedImages = carouselImages.filter((_, i) => i !== index);
		setAttributes({ carouselImages: updatedImages });
	};

	return (
		<>
			{/* Inspector Controls - Right Sidebar */}
			<InspectorControls>
				<PanelBody title={__("Rating Settings", "showcase")}>
					<RangeControl
						label={__("Rating Score", "showcase")}
						value={rating}
						onChange={(value) => setAttributes({ rating: value })}
						min={0.1}
						max={5.0}
						step={0.1}
					/>
				</PanelBody>

				<PanelBody title={__("Button Links", "showcase")} initialOpen={false}>
					<TextControl
						label={__("Special Offer Box URL", "showcase")}
						value={specialOfferUrl}
						onChange={(value) => setAttributes({ specialOfferUrl: value })}
						placeholder="https://example.com/special-offer"
						help={__(
							"Wraps the entire special offer box as a link",
							"showcase",
						)}
					/>
					<TextControl
						label={__("Primary Button URL", "showcase")}
						value={primaryButtonUrl}
						onChange={(value) => setAttributes({ primaryButtonUrl: value })}
						placeholder="https://example.com/packages"
					/>
					<TextControl
						label={__("Phone Number", "showcase")}
						value={phoneNumber}
						onChange={(value) => setAttributes({ phoneNumber: value })}
						placeholder="(555) 123-4567"
						help={__("Phone number for the Call Now button", "showcase")}
					/>
					<TextControl
						label={__("Video Review URL", "showcase")}
						value={videoButtonUrl}
						onChange={(value) => setAttributes({ videoButtonUrl: value })}
						placeholder="https://example.com/video"
					/>
					<TextControl
						label={__("Full Review URL", "showcase")}
						value={reviewButtonUrl}
						onChange={(value) => setAttributes({ reviewButtonUrl: value })}
						placeholder="https://example.com/review"
					/>
				</PanelBody>
			</InspectorControls>

			{/* Main Editor View */}
			<div {...useBlockProps()}>
				{/* Top Section */}
				<div className="wp-block-sl-blocks-showcase__top-section">
					<RichText
						tagName="div"
						className="top-text"
						value={topSectionText}
						onChange={(value) => setAttributes({ topSectionText: value })}
						placeholder={__("Best for Combo Sleepers", "showcase")}
					/>
					<div className="rating-display">
						<span className="score-badge">{rating.toFixed(1)}</span>
						<StarRating rating={rating} />
					</div>
				</div>

				{/* Main Body */}
				<div className="wp-block-sl-blocks-showcase__body">
					{/* Left: Carousel */}
					<div className="showcase__carousel">
						<CarouselEditor
							images={carouselImages}
							onSelectImages={handleSelectImages}
							onRemoveImage={handleRemoveImage}
						/>
					</div>

					{/* Right: Content */}
					<div className="showcase__content">
						{/* Service Name */}
						<RichText
							tagName="h3"
							className="service-name"
							value={serviceName}
							onChange={(value) => setAttributes({ serviceName: value })}
							placeholder={__("Service/Product Name", "showcase")}
						/>

						{/* Feature Tags */}
						<FeatureTagsEditor
							featureTags={featureTags}
							onChange={(value) => setAttributes({ featureTags: value })}
						/>

						{/* Features */}
						<FeaturesEditor
							features={features}
							onChange={(value) => setAttributes({ features: value })}
						/>

						{/* Special Offers */}
						<div className="special-offers-editor">
							<h4>{__("Special Offer", "showcase")}</h4>
							<div className="special-offer-box">
								<RichText
									tagName="div"
									className="special-offer-title"
									value={specialOfferTitle}
									onChange={(value) =>
										setAttributes({ specialOfferTitle: value })
									}
									placeholder={__("Enter Deal Title", "showcase")}
								/>
								<RichText
									tagName="div"
									className="special-offer-description"
									value={specialOfferDescription}
									onChange={(value) =>
										setAttributes({ specialOfferDescription: value })
									}
									placeholder={__("Enter deal description", "showcase")}
									allowedFormats={["core/link"]}
								/>
							</div>
						</div>

						{/* Buttons */}
						<div className="showcase-buttons-editor">
							{/* Primary Button */}

							<RichText
								tagName="div"
								className="primary-button"
								value={primaryButtonText}
								onChange={(value) =>
									setAttributes({
										primaryButtonText: value,
									})
								}
								placeholder={__("View Packages", "showcase")}
							/>

							{/* Phone Button */}
							{phoneNumber && (
								<RichText
									tagName="div"
									className="secondary-button"
									value={phoneButtonText}
									onChange={(value) =>
										setAttributes({
											phoneButtonText: value,
										})
									}
									placeholder={__("Call Now", "showcase")}
								/>
							)}

							{/* Secondary Buttons */}
							<div className="secondary-buttons">
								<RichText
									tagName="div"
									className="showcase__link"
									value={videoButtonText}
									onChange={(value) =>
										setAttributes({
											videoButtonText: value,
										})
									}
									placeholder={__("Watch Video Review", "showcase")}
								/>
								<RichText
									tagName="div"
									className="showcase__link"
									value={reviewButtonText}
									onChange={(value) =>
										setAttributes({
											reviewButtonText: value,
										})
									}
									placeholder={__("Read Full Review", "showcase")}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
