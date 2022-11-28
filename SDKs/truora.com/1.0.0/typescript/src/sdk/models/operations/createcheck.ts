import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateCheckTruoraPriorityEnum {
    Low = "low",
    Medium = "medium",
    High = "high"
}


export class CreateCheckHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Truora-Priority" })
  truoraPriority?: CreateCheckTruoraPriorityEnum;
}


export class CreateCheckSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class CreateCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateCheckHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.CreateCheckInput;

  @SpeakeasyMetadata()
  security: CreateCheckSecurity;
}


export class CreateCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkOutput?: shared.CheckOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
