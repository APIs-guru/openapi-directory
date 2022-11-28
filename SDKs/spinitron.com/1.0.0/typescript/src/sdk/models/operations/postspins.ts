import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSpinsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=artist;" })
  artist: string;

  @SpeakeasyMetadata({ data: "form, name=composer;" })
  composer?: string;

  @SpeakeasyMetadata({ data: "form, name=duration;" })
  duration?: number;

  @SpeakeasyMetadata({ data: "form, name=genre;" })
  genre?: string;

  @SpeakeasyMetadata({ data: "form, name=isrc;" })
  isrc?: string;

  @SpeakeasyMetadata({ data: "form, name=label;" })
  label?: string;

  @SpeakeasyMetadata({ data: "form, name=live;" })
  live?: boolean;

  @SpeakeasyMetadata({ data: "form, name=release;" })
  release?: string;

  @SpeakeasyMetadata({ data: "form, name=song;" })
  song: string;

  @SpeakeasyMetadata({ data: "form, name=start;" })
  start?: Date;
}


export class PostSpinsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: PostSpinsRequestBody;
}


export class PostSpinsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  spin?: shared.Spin;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ValidationError })
  validationErrors?: shared.ValidationError[];
}
