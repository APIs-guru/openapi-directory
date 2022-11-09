import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserForApiContract } from "./userforapicontract";


export class AlbumReviewContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=albumId" })
  albumId?: number;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=user" })
  user?: UserForApiContract;
}
