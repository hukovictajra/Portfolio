import Title from "@elements/Title/Title";
import { BlogPage } from "@pages/BlogPage/BlogPage";
import { NationalGeographicRemakeData } from "./data";
import { TagSection } from "@elements/TagSection/TagSection";
import { BlogSection } from "@elements/BlogSection/BlogSection";
import FigmaEmbededFrame from "@elements/FigmaEmbededFrame/FigmaEmbededFrame";
import { List, ListItem } from "@elements/List/List";

export function NationalGeographicRemake() {
	const { title, tags, colors } = NationalGeographicRemakeData;

	return (
		<BlogPage blogData={NationalGeographicRemakeData} title="National Geographic Website Redesign">
			<Title>{typeof title === "object" ? title.main : title}</Title>
			<TagSection tags={tags} colors={colors} />

			<div className="hr" />

			<BlogSection title="Design approach">
				<List>
					<ListItem>
						<span className="font-semibold">Inspiration:</span> The original National Geographic
						website's clean and visually rich aesthetic.
					</ListItem>
					<ListItem>
						<span className="font-semibold">Key element changed: </span> Added an animated
						introduction to make the website more interactive and engaging.
					</ListItem>
				</List>
			</BlogSection>

			<BlogSection title="Design features">
				<List>
					<ListItem>
						<span className="font-semibold">Minimalist layout:</span> Prioritized simplicity and
						functionality, maintaing a user-friendly experience.
					</ListItem>
					<ListItem>
						<span className="font-semibold">Interactive antimation:</span> The introduction
						animation gives a modern and dynamic feel to the webside, enchancing the user's first
						interaction.
					</ListItem>
				</List>
			</BlogSection>

			<BlogSection title="Figma project">
				<FigmaEmbededFrame src="https://embed.figma.com/proto/JX5WiGcf9Gj3P7UvGmtQeQ/National-Geo-webside-remake?node-id=31-178&node-type=canvas&scaling=scale-down-width&content-scaling=fixed&page-id=31%3A39&starting-point-node-id=31%3A178&embed-host=share" />
			</BlogSection>
		</BlogPage>
	);
}
