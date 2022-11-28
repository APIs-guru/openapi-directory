var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var GetUserFollowsShowsEmbedEnum;
(function (GetUserFollowsShowsEmbedEnum) {
    GetUserFollowsShowsEmbedEnum["Show"] = "show";
})(GetUserFollowsShowsEmbedEnum || (GetUserFollowsShowsEmbedEnum = {}));
var GetUserFollowsShowsQueryParams = /** @class */ (function (_super) {
    __extends(GetUserFollowsShowsQueryParams, _super);
    function GetUserFollowsShowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", String)
    ], GetUserFollowsShowsQueryParams.prototype, "embed", void 0);
    return GetUserFollowsShowsQueryParams;
}(SpeakeasyBase));
export { GetUserFollowsShowsQueryParams };
var GetUserFollowsShowsRequest = /** @class */ (function (_super) {
    __extends(GetUserFollowsShowsRequest, _super);
    function GetUserFollowsShowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserFollowsShowsQueryParams)
    ], GetUserFollowsShowsRequest.prototype, "queryParams", void 0);
    return GetUserFollowsShowsRequest;
}(SpeakeasyBase));
export { GetUserFollowsShowsRequest };
var GetUserFollowsShowsResponse = /** @class */ (function (_super) {
    __extends(GetUserFollowsShowsResponse, _super);
    function GetUserFollowsShowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserFollowsShowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ShowFollow }),
        __metadata("design:type", Array)
    ], GetUserFollowsShowsResponse.prototype, "showFollows", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserFollowsShowsResponse.prototype, "statusCode", void 0);
    return GetUserFollowsShowsResponse;
}(SpeakeasyBase));
export { GetUserFollowsShowsResponse };
