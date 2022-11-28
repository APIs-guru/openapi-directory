import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlbumForApiContract } from "./albumforapicontract";
import { UserForApiContract } from "./userforapicontract";


export enum AlbumForUserForApiContractMediaTypeEnum {
    PhysicalDisc = "PhysicalDisc",
    DigitalDownload = "DigitalDownload",
    Other = "Other"
}

export enum AlbumForUserForApiContractPurchaseStatusEnum {
    Nothing = "Nothing",
    Wishlisted = "Wishlisted",
    Ordered = "Ordered",
    Owned = "Owned"
}


export class AlbumForUserForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=album" })
  album?: AlbumForApiContract;

  @SpeakeasyMetadata({ data: "json, name=mediaType" })
  mediaType?: AlbumForUserForApiContractMediaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=purchaseStatus" })
  purchaseStatus?: AlbumForUserForApiContractPurchaseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserForApiContract;
}
