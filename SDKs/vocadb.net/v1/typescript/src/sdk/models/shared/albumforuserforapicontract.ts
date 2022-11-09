import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlbumForApiContract } from "./albumforapicontract";
import { UserForApiContract } from "./userforapicontract";

export enum AlbumForUserForApiContractMediaTypeEnum {
    PhysicalDisc = "PhysicalDisc"
,    DigitalDownload = "DigitalDownload"
,    Other = "Other"
}

export enum AlbumForUserForApiContractPurchaseStatusEnum {
    Nothing = "Nothing"
,    Wishlisted = "Wishlisted"
,    Ordered = "Ordered"
,    Owned = "Owned"
}


export class AlbumForUserForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=album" })
  album?: AlbumForApiContract;

  @Metadata({ data: "json, name=mediaType" })
  mediaType?: AlbumForUserForApiContractMediaTypeEnum;

  @Metadata({ data: "json, name=purchaseStatus" })
  purchaseStatus?: AlbumForUserForApiContractPurchaseStatusEnum;

  @Metadata({ data: "json, name=rating" })
  rating?: number;

  @Metadata({ data: "json, name=user" })
  user?: UserForApiContract;
}
