import { ASSET_TYPE } from '../../consts';
/**
 * Up to the user to correctly define the `other_cdn` query.
 * Should be key=val&key2=val2&...&keyn=valn
 *
 * See: <https://docs.cloudimage.io/>
 */
export interface CDN_IMG_OPTIONS {
    w?: number;
    h?: number;
    func?: string;
    trim?: number;
    face_margin?: number;
    gravity?: string;
    other_cdn?: string;
}
export type AssetType = keyof typeof ASSET_TYPE;
