import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreativeCommonsCodeEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}


export class CreativeCommons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: CreativeCommonsCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
