import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { showRating, rating } = attributes || {};
	const maxRating = 5;
	const radius = 46;
	const circumference = 2 * Math.PI * radius;
	const scoreRatio = rating / maxRating;
	const strokeDashOffset = circumference * (1 - scoreRatio);
	return (
		<div {...useBlockProps.save()}>
			<div className="score">
				<svg
					className="ring"
					viewBox="0 0 120 120"
					aria-label={__(
						`Overall score ${rating} out of ${maxRating}`,
						"rating",
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
					<div className="label">{__("Overall Score", "rating-accordion")}</div>
				</div>
			</div>
		</div>
	);
}
