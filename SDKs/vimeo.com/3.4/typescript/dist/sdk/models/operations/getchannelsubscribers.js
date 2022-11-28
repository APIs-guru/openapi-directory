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
var GetChannelSubscribersPathParams = /** @class */ (function (_super) {
    __extends(GetChannelSubscribersPathParams, _super);
    function GetChannelSubscribersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], GetChannelSubscribersPathParams.prototype, "channelId", void 0);
    return GetChannelSubscribersPathParams;
}(SpeakeasyBase));
export { GetChannelSubscribersPathParams };
export var GetChannelSubscribersDirectionEnum;
(function (GetChannelSubscribersDirectionEnum) {
    GetChannelSubscribersDirectionEnum["Asc"] = "asc";
    GetChannelSubscribersDirectionEnum["Desc"] = "desc";
})(GetChannelSubscribersDirectionEnum || (GetChannelSubscribersDirectionEnum = {}));
export var GetChannelSubscribersFilterEnum;
(function (GetChannelSubscribersFilterEnum) {
    GetChannelSubscribersFilterEnum["Moderators"] = "moderators";
})(GetChannelSubscribersFilterEnum || (GetChannelSubscribersFilterEnum = {}));
export var GetChannelSubscribersSortEnum;
(function (GetChannelSubscribersSortEnum) {
    GetChannelSubscribersSortEnum["Alphabetical"] = "alphabetical";
    GetChannelSubscribersSortEnum["Date"] = "date";
})(GetChannelSubscribersSortEnum || (GetChannelSubscribersSortEnum = {}));
var GetChannelSubscribersQueryParams = /** @class */ (function (_super) {
    __extends(GetChannelSubscribersQueryParams, _super);
    function GetChannelSubscribersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetChannelSubscribersQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetChannelSubscribersQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetChannelSubscribersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetChannelSubscribersQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetChannelSubscribersQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetChannelSubscribersQueryParams.prototype, "sort", void 0);
    return GetChannelSubscribersQueryParams;
}(SpeakeasyBase));
export { GetChannelSubscribersQueryParams };
var GetChannelSubscribersRequest = /** @class */ (function (_super) {
    __extends(GetChannelSubscribersRequest, _super);
    function GetChannelSubscribersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChannelSubscribersPathParams)
    ], GetChannelSubscribersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChannelSubscribersQueryParams)
    ], GetChannelSubscribersRequest.prototype, "queryParams", void 0);
    return GetChannelSubscribersRequest;
}(SpeakeasyBase));
export { GetChannelSubscribersRequest };
var GetChannelSubscribersResponse = /** @class */ (function (_super) {
    __extends(GetChannelSubscribersResponse, _super);
    function GetChannelSubscribersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChannelSubscribersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChannelSubscribersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetChannelSubscribersResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], GetChannelSubscribersResponse.prototype, "users", void 0);
    return GetChannelSubscribersResponse;
}(SpeakeasyBase));
export { GetChannelSubscribersResponse };
