import { SpeakeasyBase } from "../../../internal/utils";
import { AlbumForApiContract } from "./albumforapicontract";
import { UserForApiContract } from "./userforapicontract";
export declare enum AlbumForUserForApiContractMediaTypeEnum {
    PhysicalDisc = "PhysicalDisc",
    DigitalDownload = "DigitalDownload",
    Other = "Other"
}
export declare enum AlbumForUserForApiContractPurchaseStatusEnum {
    Nothing = "Nothing",
    Wishlisted = "Wishlisted",
    Ordered = "Ordered",
    Owned = "Owned"
}
export declare class AlbumForUserForApiContract extends SpeakeasyBase {
    album?: AlbumForApiContract;
    mediaType?: AlbumForUserForApiContractMediaTypeEnum;
    purchaseStatus?: AlbumForUserForApiContractPurchaseStatusEnum;
    rating?: number;
    user?: UserForApiContract;
}
