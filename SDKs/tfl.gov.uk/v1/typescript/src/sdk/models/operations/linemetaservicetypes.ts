import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LineMetaServiceTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lineMetaServiceTypes200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  lineMetaServiceTypes200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
