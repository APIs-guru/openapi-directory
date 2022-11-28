import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAudioPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetAudioUseCanonicalEnum {
    False = "false",
    True = "true"
}


export class GetAudioQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetAudioUseCanonicalEnum;
}


export class GetAudioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAudioPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAudioQueryParams;
}


export class GetAudioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
