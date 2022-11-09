import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlbumForUserForApiContract } from "./albumforuserforapicontract";


export class PartialFindResultAlbumForUserForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.AlbumForUserForApiContract })
  items?: AlbumForUserForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
