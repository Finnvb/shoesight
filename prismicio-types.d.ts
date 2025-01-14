// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Article documents */
interface ArticleDocumentData {
  /**
   * title field in *Article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.RichTextField;
  /**
   * label field in *Article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label: prismicT.RichTextField;
  /**
   * shortDescription field in *Article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.shortdescription
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  shortdescription: prismicT.RichTextField;
  /**
   * introduction field in *Article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.introduction
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  introduction: prismicT.RichTextField;
  /**
   * body field in *Article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.body
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  body: prismicT.RichTextField;
  /**
   * featuredImage field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.featuredimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  featuredimage: prismicT.ImageField<never>;
  /**
   * publishDate field in *Article*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: article.publishdate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
   *
   */
  publishdate: prismicT.TimestampField;
  /**
   * author field in *Article*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: article.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  author: prismicT.RelationField<"publisher">;
  /**
   * relatedArticles field in *Article*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: article.relatedarticles[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  relatedarticles: prismicT.GroupField<
    Simplify<ArticleDocumentDataRelatedarticlesItem>
  >;
}
/**
 * Item in Article → relatedArticles
 *
 */
export interface ArticleDocumentDataRelatedarticlesItem {
  /**
   * articleLink field in *Article → relatedArticles*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: article.relatedarticles[].articlelink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  articlelink: prismicT.RelationField<"article">;
}
/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<ArticleDocumentData>,
    "article",
    Lang
  >;
/** Content for Homepage documents */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
  /**
   * meta_title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismicT.KeyTextField;
  /**
   * meta_description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismicT.KeyTextField;
  /**
   * meta_keywords field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_keywords
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_keywords: prismicT.KeyTextField;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice =
  | HighlightsSliceSlice
  | FunstuffSliceSlice
  | NieuwSliceSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;
/** Content for Author documents */
interface PublisherDocumentData {
  /**
   * name field in *Author*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: publisher.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismicT.RichTextField;
  /**
   * featuredImage field in *Author*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: publisher.featuredimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  featuredimage: prismicT.ImageField<never>;
}
/**
 * Author document from Prismic
 *
 * - **API ID**: `publisher`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PublisherDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<PublisherDocumentData>,
    "publisher",
    Lang
  >;
export type AllDocumentTypes =
  | ArticleDocument
  | HomepageDocument
  | PublisherDocument;
/**
 * Primary content in FunstuffSlice → Primary
 *
 */
interface FunstuffSliceSliceDefaultPrimary {
  /**
   * Title field in *FunstuffSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: funstuff_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.RichTextField;
}
/**
 * Item in FunstuffSlice → Items
 *
 */
export interface FunstuffSliceSliceDefaultItem {
  /**
   * article_link field in *FunstuffSlice → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: funstuff_slice.items[].article_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  article_link: prismicT.RelationField<"article">;
}
/**
 * Default variation for FunstuffSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FunstuffSliceSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<FunstuffSliceSliceDefaultPrimary>,
  Simplify<FunstuffSliceSliceDefaultItem>
>;
/**
 * Slice variation for *FunstuffSlice*
 *
 */
type FunstuffSliceSliceVariation = FunstuffSliceSliceDefault;
/**
 * FunstuffSlice Shared Slice
 *
 * - **API ID**: `funstuff_slice`
 * - **Description**: `FunstuffSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FunstuffSliceSlice = prismicT.SharedSlice<
  "funstuff_slice",
  FunstuffSliceSliceVariation
>;
/**
 * Primary content in HighlightsSlice → Primary
 *
 */
interface HighlightsSliceSliceDefaultPrimary {
  /**
   * Title field in *HighlightsSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.RichTextField;
}
/**
 * Item in HighlightsSlice → Items
 *
 */
export interface HighlightsSliceSliceDefaultItem {
  /**
   * articleLink field in *HighlightsSlice → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights_slice.items[].articlelink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  articlelink: prismicT.RelationField<"article">;
}
/**
 * Default variation for HighlightsSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HighlightsSliceSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<HighlightsSliceSliceDefaultPrimary>,
  Simplify<HighlightsSliceSliceDefaultItem>
>;
/**
 * Slice variation for *HighlightsSlice*
 *
 */
type HighlightsSliceSliceVariation = HighlightsSliceSliceDefault;
/**
 * HighlightsSlice Shared Slice
 *
 * - **API ID**: `highlights_slice`
 * - **Description**: `HighlightsSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HighlightsSliceSlice = prismicT.SharedSlice<
  "highlights_slice",
  HighlightsSliceSliceVariation
>;
/**
 * Primary content in NieuwSlice → Primary
 *
 */
interface NieuwSliceSliceDefaultPrimary {
  /**
   * Title field in *NieuwSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nieuw_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.RichTextField;
}
/**
 * Item in NieuwSlice → Items
 *
 */
export interface NieuwSliceSliceDefaultItem {
  /**
   * articleLink field in *NieuwSlice → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: nieuw_slice.items[].articlelink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  articlelink: prismicT.RelationField<"article">;
}
/**
 * Default variation for NieuwSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NieuwSliceSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<NieuwSliceSliceDefaultPrimary>,
  Simplify<NieuwSliceSliceDefaultItem>
>;
/**
 * Slice variation for *NieuwSlice*
 *
 */
type NieuwSliceSliceVariation = NieuwSliceSliceDefault;
/**
 * NieuwSlice Shared Slice
 *
 * - **API ID**: `nieuw_slice`
 * - **Description**: `NieuwSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NieuwSliceSlice = prismicT.SharedSlice<
  "nieuw_slice",
  NieuwSliceSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      ArticleDocumentData,
      ArticleDocumentDataRelatedarticlesItem,
      ArticleDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      HomepageDocument,
      PublisherDocumentData,
      PublisherDocument,
      AllDocumentTypes,
      FunstuffSliceSliceDefaultPrimary,
      FunstuffSliceSliceDefaultItem,
      FunstuffSliceSliceDefault,
      FunstuffSliceSliceVariation,
      FunstuffSliceSlice,
      HighlightsSliceSliceDefaultPrimary,
      HighlightsSliceSliceDefaultItem,
      HighlightsSliceSliceDefault,
      HighlightsSliceSliceVariation,
      HighlightsSliceSlice,
      NieuwSliceSliceDefaultPrimary,
      NieuwSliceSliceDefaultItem,
      NieuwSliceSliceDefault,
      NieuwSliceSliceVariation,
      NieuwSliceSlice,
    };
  }
}
