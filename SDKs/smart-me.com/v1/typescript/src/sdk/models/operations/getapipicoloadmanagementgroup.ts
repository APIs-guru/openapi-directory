import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiPicoLoadmanagementgroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PicoLoadmanagementGroupDto })
  picoLoadmanagementGroupDtos?: shared.PicoLoadmanagementGroupDto[];

  @SpeakeasyMetadata()
  statusCode: number;
}
