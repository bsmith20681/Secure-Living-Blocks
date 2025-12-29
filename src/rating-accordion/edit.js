import { __ } from "@wordpress/i18n";
import {
	RichText,
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
import "./editor.scss";

/**
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { summary, detail, score } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Rating Settings", "rating-accordion")}>
					<RangeControl
						label={__("Score", "rating-accordion")}
						value={parseFloat(score) || 0.1}
						onChange={(value) => setAttributes({ score: value.toFixed(1) })}
						min={0.1}
						max={5}
						step={0.1}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<details className="wp-block-sl-blocks-rating-accordion">
					<summary className="wp-block-sl-blocks-rating-accordion__summary">
						<RichText
							tagName="span"
							value={summary}
							allowedFormats={["core/bold"]}
							placeholder={__("Summary text…", "rating-accordion")}
							onChange={(value) => setAttributes({ summary: value })}
						/>
						<span className="wp-block-sl-blocks-rating-accordion__score-wrapper">
							<span className="wp-block-sl-blocks-rating-accordion__score">{score || "0.0"}</span>/ 5
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="12px"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="wp-block-sl-blocks-rating-accordion__chevron"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m19.5 8.25-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</span>
					</summary>

					<RichText
						tagName="div"
						className="wp-block-sl-blocks-rating-accordion__detail"
						value={detail}
						multiline="p"
						placeholder={__("Detail text…", "rating-accordion")}
						onChange={(value) => setAttributes({ detail: value })}
					/>
				</details>
			</div>
		</>
	);
}
