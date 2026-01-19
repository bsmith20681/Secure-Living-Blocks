import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import {
	RichText,
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaPlaceholder,
	InnerBlocks,
} from "@wordpress/block-editor";
import { useSelect, useDispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
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
			className="flex items-center justify-center gap-1 flex-wrap"
			aria-label={`${rating} out of 5 stars`}
		>
			{/* Full stars */}
			{[...Array(fullStars)].map((_, i) => (
				<svg
					key={`full-${i}`}
					width="20"
					height="20"
					viewBox="0 0 24 24"
					className="text-brand-accent"
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
					className="text-brand-accent"
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
					className="text-border-light"
				>
					<path d={starPath} fill="currentColor" />
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
		<div className="w-full">
			{/* Main Image Display */}
			<div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4">
				<img
					src={images[activeIndex]?.url}
					alt={images[activeIndex]?.alt || ""}
					className="w-full h-full object-cover"
				/>

				{/* Navigation Arrows */}
				{images.length > 1 && (
					<>
						<button
							className="absolute top-1/2 left-2.5 -translate-y-1/2 bg-black/50 text-white border-none w-10 h-10 rounded-full text-2xl cursor-pointer flex items-center justify-center transition-colors z-[2] hover:bg-black/70 focus:outline-2 focus:outline-brand-primary focus:outline-offset-2 disabled:opacity-30 disabled:cursor-not-allowed"
							onClick={handlePrev}
							disabled={activeIndex === 0}
							aria-label={__("Previous image", "showcase")}
						>
							‹
						</button>
						<button
							className="absolute top-1/2 right-2.5 -translate-y-1/2 bg-black/50 text-white border-none w-10 h-10 rounded-full text-2xl cursor-pointer flex items-center justify-center transition-colors z-[2] hover:bg-black/70 focus:outline-2 focus:outline-brand-primary focus:outline-offset-2 disabled:opacity-30 disabled:cursor-not-allowed"
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
			<div className="flex gap-2 overflow-x-auto pb-2">
				{images.map((image, index) => (
					<div
						key={image.id}
						className={`relative w-20 h-20 flex-shrink-0 rounded overflow-hidden cursor-pointer border-2 transition-colors group ${
							index === activeIndex
								? "border-brand-primary shadow-[0_0_0_1px_#1626b8]"
								: "border-transparent hover:border-brand-primary"
						}`}
						onClick={() => setActiveIndex(index)}
					>
						<img
							src={image.url}
							alt=""
							className="w-full h-full object-cover"
						/>
						<button
							className="absolute top-0.5 right-0.5 bg-red-500/80 text-white border-none w-5 h-5 rounded-full text-base leading-none cursor-pointer hidden group-hover:flex items-center justify-center hover:bg-red-500"
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
								className="w-20 h-20 flex-shrink-0 border-2 border-dashed border-brand-primary bg-surface-light rounded text-brand-primary text-3xl cursor-pointer flex items-center justify-center transition-all hover:bg-surface-lighter hover:border-brand-primary-dark"
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
		<div className="mb-4">
			<h4 className="text-base font-semibold mb-3 text-primary">
				{__("Feature Tags", "showcase")}
			</h4>
			<div className="space-y-2">
				{featureTags.map((tag, index) => (
					<div key={index} className="flex items-center gap-2">
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
		<div className="mb-4">
			<h4 className="text-base font-semibold mb-3 text-primary">
				{__("Features", "showcase")}
			</h4>
			{features.map((feature, index) => (
				<div
					key={index}
					className="flex items-center gap-2 mb-3 p-2 bg-gray-50 rounded"
				>
					<span className="dashicons dashicons-yes text-brand-primary"></span>
					<RichText
						tagName="span"
						value={feature.text}
						onChange={(value) => updateFeature(index, value)}
						placeholder={__("Feature text...", "showcase")}
						className="flex-1"
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

export default function Edit({ attributes, setAttributes, clientId }) {
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

	// Tab state - tracks which tab is active in the editor
	const [activeTab, setActiveTab] = useState(0);

	// Get inner blocks (showcase-tab children) and dispatch
	const { insertBlock, removeBlock, updateBlockAttributes } =
		useDispatch("core/block-editor");
	const innerBlocks = useSelect(
		(select) => select("core/block-editor").getBlocks(clientId),
		[clientId],
	);

	// Tab handlers
	const addTab = () => {
		const newBlock = createBlock("sl-blocks/showcase-tab", {
			title: "New Tab",
		});
		insertBlock(newBlock, innerBlocks.length, clientId);
		setActiveTab(innerBlocks.length);
	};

	const removeTab = (index) => {
		if (innerBlocks.length <= 1) return;
		const blockToRemove = innerBlocks[index];
		if (blockToRemove) {
			removeBlock(blockToRemove.clientId);
			if (activeTab >= innerBlocks.length - 1) {
				setActiveTab(Math.max(0, innerBlocks.length - 2));
			} else if (activeTab > index) {
				setActiveTab(activeTab - 1);
			}
		}
	};

	const updateTabTitle = (index, title) => {
		const block = innerBlocks[index];
		if (block) {
			updateBlockAttributes(block.clientId, { title });
		}
	};

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
			<div
				{...useBlockProps({
					className: "border border-brand-primary-dark rounded-lg mb-6",
				})}
			>
				{/* Top Section */}
				<div className="text-center flex justify-between items-center bg-surface-lighter p-4 rounded-t-lg">
					<RichText
						tagName="div"
						className="text-2xl md:text-3xl font-medium text-primary"
						value={topSectionText}
						onChange={(value) => setAttributes({ topSectionText: value })}
						placeholder={__("Best for Combo Sleepers", "showcase")}
					/>
					<div className="flex items-center justify-center gap-1 flex-wrap">
						<span className="font-bold py-2 px-4 text-3xl">
							{rating.toFixed(1)}
						</span>
						<StarRating rating={rating} />
					</div>
				</div>

				{/* Main Body */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:py-8 bg-surface-light">
					{/* Left: Carousel */}
					<div className="w-full">
						<CarouselEditor
							images={carouselImages}
							onSelectImages={handleSelectImages}
							onRemoveImage={handleRemoveImage}
						/>
					</div>

					{/* Right: Content */}
					<div className="flex flex-col gap-6">
						{/* Service Name */}
						<RichText
							tagName="h3"
							className="text-2xl md:text-4xl font-medium text-primary m-0"
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
						<div>
							<h4 className="text-base font-semibold mb-3 text-primary">
								{__("Special Offer", "showcase")}
							</h4>
							<div className="bg-white border border-border-light rounded p-5 text-center mb-4">
								<RichText
									tagName="div"
									className="text-xl font-bold text-primary mb-2"
									value={specialOfferTitle}
									onChange={(value) =>
										setAttributes({ specialOfferTitle: value })
									}
									placeholder={__("Enter Deal Title", "showcase")}
								/>
								<RichText
									tagName="div"
									className="text-sm text-secondary leading-relaxed"
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
						<div className="flex flex-col gap-6">
							{/* Primary Button */}
							<RichText
								tagName="div"
								className="bg-brand-primary text-white py-4 px-8 border-none rounded font-semibold text-center block cursor-pointer transition-colors hover:bg-brand-primary-dark"
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
									className="bg-transparent text-brand-primary py-4 px-8 border-2 border-brand-primary rounded font-semibold text-center flex items-center justify-center gap-2 cursor-pointer transition-all"
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
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
								<RichText
									tagName="div"
									className="text-sm"
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
									className="text-sm"
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

				{/* Tabs */}
				<div className="bg-surface-light px-4 pb-8">
					{/* Tab Navigation */}
					<div className="flex gap-2 border-b-2 border-border-light mb-6">
						{innerBlocks.map((block, index) => (
							<div
								key={block.clientId}
								className={`bg-transparent border-none py-4 px-6 text-base font-medium cursor-pointer relative transition-colors ${
									activeTab === index
										? "text-brand-primary after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-brand-primary"
										: "text-muted hover:text-brand-primary"
								}`}
								onClick={() => setActiveTab(index)}
							>
								<RichText
									tagName="span"
									value={block.attributes.title}
									onChange={(value) => updateTabTitle(index, value)}
									placeholder={__("Tab Title", "showcase")}
								/>
								{innerBlocks.length > 1 && (
									<button
										className="ml-2 text-red-500 hover:text-red-700"
										onClick={(e) => {
											e.stopPropagation();
											removeTab(index);
										}}
										aria-label={__("Remove tab", "showcase")}
									>
										×
									</button>
								)}
							</div>
						))}
						<Button isPrimary isSmall onClick={addTab}>
							{__("+ Add Tab", "showcase")}
						</Button>
					</div>

					{/* Tab Content - renders child showcase-tab blocks */}
					<div data-active-tab={activeTab}>
						<InnerBlocks
							allowedBlocks={["sl-blocks/showcase-tab"]}
							template={[
								["sl-blocks/showcase-tab", { title: "Overview" }],
								["sl-blocks/showcase-tab", { title: "Features" }],
								["sl-blocks/showcase-tab", { title: "Details" }],
							]}
							renderAppender={false}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
