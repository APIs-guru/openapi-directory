import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetZipArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=archiveKind" })
  archiveKind: shared.ArchiveKindEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=commitId" })
  commitId: string;
}


export class GetZipArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetZipArchivePathParams;
}


export class GetZipArchiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getZipArchive200ApplicationOctetStreamBinaryString?: Uint8Array;
}
