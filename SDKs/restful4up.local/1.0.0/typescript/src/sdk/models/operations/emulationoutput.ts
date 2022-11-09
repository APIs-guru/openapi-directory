import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EmulationOutputRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: any;
}


export class EmulationOutputResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
