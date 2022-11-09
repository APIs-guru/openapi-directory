import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEnergyCostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class UpdateEnergyCostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEnergyCostPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GroupConfiguration;
}


export class UpdateEnergyCostResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
