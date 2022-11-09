import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LineMetaServiceTypesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  lineMetaServiceTypes200ApplicationJsonStrings?: string[];

  @Metadata()
  lineMetaServiceTypes200TextJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
