import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps} data-tab-title={title}>
			<InnerBlocks.Content />
		</div>
	);
}
