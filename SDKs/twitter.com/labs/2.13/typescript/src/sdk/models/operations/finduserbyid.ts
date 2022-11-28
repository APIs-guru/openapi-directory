import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindUserByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FindUserByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=expansions" })
  expansions?: shared.UserExpansionsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=media.fields" })
  mediaFields?: shared.MediaFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=place.fields" })
  placeFields?: shared.PlaceFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=poll.fields" })
  pollFields?: shared.PollFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tweet.fields" })
  tweetFields?: shared.TweetFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=user.fields" })
  userFields?: shared.UserFieldsParameterEnum[];
}


export class FindUserByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FindUserByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: FindUserByIdQueryParams;
}


export class FindUserByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  problem?: any;

  @SpeakeasyMetadata()
  singleUserLookupResponse?: shared.SingleUserLookupResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
