import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreativeCommonsCodeEnum {
    By = "by"
,    ByNc = "by-nc"
,    ByNcNd = "by-nc-nd"
,    ByNcSa = "by-nc-sa"
,    ByNd = "by-nd"
,    BySa = "by-sa"
,    Cc0 = "cc0"
}


export class CreativeCommons extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: CreativeCommonsCodeEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}
