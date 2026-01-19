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
				<details className="bg-surface-light mb-4 cursor-pointer group">
					<summary className="flex justify-between items-center py-4 px-6">
						<RichText
							tagName="span"
							value={summary}
							allowedFormats={["core/bold"]}
							placeholder={__("Summary text…", "rating-accordion")}
							onChange={(value) => setAttributes({ summary: value })}
							className="[margin-block-start:0px] text-lg"
						/>
						<span className="flex items-center gap-1">
							<span className="font-bold">{score || "0.0"}</span>/ 5
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="12px"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="transition-transform duration-300 group-open:rotate-180"
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
						className="mt-3 text-secondary px-6 pb-3"
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
