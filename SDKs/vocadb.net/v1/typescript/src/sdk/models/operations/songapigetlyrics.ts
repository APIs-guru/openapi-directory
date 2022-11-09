import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SongApiGetLyricsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=lyricsId" })
  lyricsId: number;
}


export class SongApiGetLyricsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SongApiGetLyricsPathParams;
}


export class SongApiGetLyricsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  lyricsForSongContract?: shared.LyricsForSongContract;

  @Metadata()
  statusCode: number;
}
