import { z, defineCollection } from "astro:content"

const primaryHeaderCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		href: z.string(),
		order: z.number(),

	})

})

const secondaryHeaderCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		href: z.string(),
		order: z.number(),
		has_dropdown: z.boolean(),
		items: z.array(

			z.object({
				title: z.string(),
				href: z.string(),
				order: z.number(),
			})

		).optional(),

	})

})

export const collections = {

	"primary-header": primaryHeaderCollection,
	"secondary-header": secondaryHeaderCollection

}
