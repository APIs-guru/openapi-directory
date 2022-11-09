import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVodGenresByOndemandIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class GetVodGenresByOndemandIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVodGenresByOndemandIdPathParams;
}


export class GetVodGenresByOndemandIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.OnDemandGenre })
  onDemandGenres?: shared.OnDemandGenre[];
}
