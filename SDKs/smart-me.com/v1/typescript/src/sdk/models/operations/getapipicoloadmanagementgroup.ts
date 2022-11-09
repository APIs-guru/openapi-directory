import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiPicoLoadmanagementgroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PicoLoadmanagementGroupDto })
  picoLoadmanagementGroupDtos?: shared.PicoLoadmanagementGroupDto[];

  @Metadata()
  statusCode: number;
}
