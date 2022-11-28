import { SpeakeasyBase } from "../../../internal/utils";
import { UserForApiContract } from "./userforapicontract";
export declare class AlbumReviewContract extends SpeakeasyBase {
    albumId?: number;
    date?: Date;
    id?: number;
    languageCode?: string;
    text?: string;
    title?: string;
    user?: UserForApiContract;
}
