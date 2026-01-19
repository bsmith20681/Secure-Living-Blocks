import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
import "./editor.scss";

/**
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { showRating, rating } = attributes || {};
	const maxRating = 5;
	const radius = 46;
	const circumference = 2 * Math.PI * radius;
	const scoreRatio = rating / maxRating;
	const strokeDashOffset = circumference * (1 - scoreRatio);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "rating")}>
					<RangeControl
						__next40pxDefaultSize
						label={__("Rating", "rating")}
						value={rating || 5}
						onChange={(value) => setAttributes({ rating: value })}
						step={0.1}
						min={0.1}
						max={5}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div className="relative max-w-xs aspect-square grid place-items-center">
					<svg
						className="w-full max-w-xs h-full -rotate-90 ring-svg"
						viewBox="0 0 120 120"
						aria-label={__(
							`Overall score ${rating} out of ${maxRating}`,
							"rating",
						)}
					>
						<circle
							className="fill-none stroke-[#e9eefc] stroke-[18]"
							cx="60"
							cy="60"
							r="46"
						/>
						<circle
							className="fill-none stroke-brand-primary stroke-[18] transition-all duration-500 ease-out progress-circle"
							cx="60"
							cy="60"
							r="46"
							strokeDasharray={circumference}
							strokeDashoffset={strokeDashOffset}
						/>
					</svg>

					<div className="absolute text-center left-0 right-0 mx-auto w-fit">
						<div className="font-bold text-6xl leading-none text-primary">
							{rating}
						</div>
						<div className="font-medium text-xl leading-tight text-primary">
							{__("Overall Score", "rating")}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
