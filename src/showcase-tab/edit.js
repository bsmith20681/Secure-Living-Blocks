import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes, isSelected, context }) {
	const { title } = attributes;
	const blockProps = useBlockProps({
		className: "showcase-tab-editor",
	});

	return (
		<div {...blockProps}>
			<InnerBlocks
				templateLock={false}
				renderAppender={InnerBlocks.ButtonBlockAppender}
			/>
		</div>
	);
}
