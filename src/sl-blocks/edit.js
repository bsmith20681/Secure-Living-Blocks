import { __, sprintf } from "@wordpress/i18n";
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
				<PanelBody title={__("Settings", "sl-blocks")}>
					<RangeControl
						__next40pxDefaultSize
						label={__("Rating", "sl-blocks")}
						value={rating || 5}
						onChange={(value) => setAttributes({ rating: value })}
						step={0.1}
						min={0.1}
						max={5}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div className="score">
					<svg
						className="ring"
						viewBox="0 0 120 120"
						aria-label={sprintf(
							__("Overall score %s out of %s", "sl-blocks"),
							rating,
							maxRating,
						)}
					>
						<circle className="track" cx="60" cy="60" r="46" />
						<circle
							className="progress"
							cx="60"
							cy="60"
							r="46"
							strokeDasharray={circumference}
							strokeDashoffset={strokeDashOffset}
						/>
					</svg>

					<div className="center">
						<div className="value">{rating}</div>
						<div className="label">{__("Overall Score", "sl-blocks")}</div>
					</div>
				</div>
			</div>
		</>
	);
}
