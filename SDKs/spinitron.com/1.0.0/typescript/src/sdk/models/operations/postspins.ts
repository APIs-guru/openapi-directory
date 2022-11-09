import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSpinsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=artist;" })
  artist: string;

  @Metadata({ data: "form, name=composer;" })
  composer?: string;

  @Metadata({ data: "form, name=duration;" })
  duration?: number;

  @Metadata({ data: "form, name=genre;" })
  genre?: string;

  @Metadata({ data: "form, name=isrc;" })
  isrc?: string;

  @Metadata({ data: "form, name=label;" })
  label?: string;

  @Metadata({ data: "form, name=live;" })
  live?: boolean;

  @Metadata({ data: "form, name=release;" })
  release?: string;

  @Metadata({ data: "form, name=song;" })
  song: string;

  @Metadata({ data: "form, name=start;" })
  start?: Date;
}


export class PostSpinsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: PostSpinsRequestBody;
}


export class PostSpinsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  spin?: shared.Spin;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.ValidationError })
  validationErrors?: shared.ValidationError[];
}
