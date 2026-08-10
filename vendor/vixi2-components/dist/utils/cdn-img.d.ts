import { CDN_IMG_OPTIONS } from '../types';
/**
 * Builds a CDN compatible Url for images.
 *
 * Also works with videos - but not all options will apply.
 *
 * @param uri - the untransformed uri.
 * @param opts - transformations to apply.
 * @returns - tranformed uri.
 */
export declare const CDN_IMG: (uri: string | null | undefined, opts: CDN_IMG_OPTIONS) => string | null;
