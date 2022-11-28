import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateEnergyCostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class UpdateEnergyCostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEnergyCostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GroupConfiguration;
}


export class UpdateEnergyCostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
