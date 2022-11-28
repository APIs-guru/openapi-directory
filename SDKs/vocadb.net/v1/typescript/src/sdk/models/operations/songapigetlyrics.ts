import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SongApiGetLyricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lyricsId" })
  lyricsId: number;
}


export class SongApiGetLyricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SongApiGetLyricsPathParams;
}


export class SongApiGetLyricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lyricsForSongContract?: shared.LyricsForSongContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
