import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateCheckTruoraPriorityEnum {
    Low = "low"
,    Medium = "medium"
,    High = "high"
}


export class CreateCheckHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Truora-Priority" })
  truoraPriority?: CreateCheckTruoraPriorityEnum;
}


export class CreateCheckSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class CreateCheckRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCheckHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.CreateCheckInput;

  @Metadata()
  security: CreateCheckSecurity;
}


export class CreateCheckResponse extends SpeakeasyBase {
  @Metadata()
  checkOutput?: shared.CheckOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;
}
