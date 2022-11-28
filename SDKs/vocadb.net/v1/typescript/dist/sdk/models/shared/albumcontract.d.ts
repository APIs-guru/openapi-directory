import { SpeakeasyBase } from "../../../internal/utils";
import { OptionalDateTimeContract } from "./optionaldatetimecontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { ReleaseEventForApiContractInput } from "./releaseeventforapicontract";
export declare enum AlbumContractDiscTypeEnum {
    Unknown = "Unknown",
    Album = "Album",
    Single = "Single",
    Ep = "EP",
    SplitAlbum = "SplitAlbum",
    Compilation = "Compilation",
    Video = "Video",
    Artbook = "Artbook",
    Game = "Game",
    Fanmade = "Fanmade",
    Instrumental = "Instrumental",
    Other = "Other"
}
export declare enum AlbumContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class AlbumContract extends SpeakeasyBase {
    additionalNames?: string;
    artistString?: string;
    coverPictureMime?: string;
    createDate?: Date;
    deleted?: boolean;
    discType?: AlbumContractDiscTypeEnum;
    id?: number;
    name?: string;
    ratingAverage?: number;
    ratingCount?: number;
    releaseDate?: OptionalDateTimeContract;
    releaseEvent?: ReleaseEventForApiContract;
    status?: AlbumContractStatusEnum;
    version?: number;
}
export declare class AlbumContractInput extends SpeakeasyBase {
    additionalNames?: string;
    artistString?: string;
    coverPictureMime?: string;
    createDate?: Date;
    deleted?: boolean;
    discType?: AlbumContractDiscTypeEnum;
    id?: number;
    name?: string;
    ratingAverage?: number;
    ratingCount?: number;
    releaseDate?: OptionalDateTimeContract;
    releaseEvent?: ReleaseEventForApiContractInput;
    status?: AlbumContractStatusEnum;
    version?: number;
}
