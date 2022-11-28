import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetZipArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=archiveKind" })
  archiveKind: shared.ArchiveKindEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commitId" })
  commitId: string;
}


export class GetZipArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetZipArchivePathParams;
}


export class GetZipArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getZipArchive200ApplicationOctetStreamBinaryString?: Uint8Array;
}
