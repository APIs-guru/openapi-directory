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
var GetUserVodsPathParams = /** @class */ (function (_super) {
    __extends(GetUserVodsPathParams, _super);
    function GetUserVodsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetUserVodsPathParams.prototype, "userId", void 0);
    return GetUserVodsPathParams;
}(SpeakeasyBase));
export { GetUserVodsPathParams };
export var GetUserVodsDirectionEnum;
(function (GetUserVodsDirectionEnum) {
    GetUserVodsDirectionEnum["Asc"] = "asc";
    GetUserVodsDirectionEnum["Desc"] = "desc";
})(GetUserVodsDirectionEnum || (GetUserVodsDirectionEnum = {}));
export var GetUserVodsFilterEnum;
(function (GetUserVodsFilterEnum) {
    GetUserVodsFilterEnum["Film"] = "film";
    GetUserVodsFilterEnum["Series"] = "series";
})(GetUserVodsFilterEnum || (GetUserVodsFilterEnum = {}));
export var GetUserVodsSortEnum;
(function (GetUserVodsSortEnum) {
    GetUserVodsSortEnum["Added"] = "added";
    GetUserVodsSortEnum["Alphabetical"] = "alphabetical";
    GetUserVodsSortEnum["Date"] = "date";
    GetUserVodsSortEnum["ModifiedTime"] = "modified_time";
    GetUserVodsSortEnum["Name"] = "name";
    GetUserVodsSortEnum["PublishTime"] = "publish.time";
    GetUserVodsSortEnum["Rating"] = "rating";
})(GetUserVodsSortEnum || (GetUserVodsSortEnum = {}));
var GetUserVodsQueryParams = /** @class */ (function (_super) {
    __extends(GetUserVodsQueryParams, _super);
    function GetUserVodsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetUserVodsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUserVodsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUserVodsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetUserVodsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUserVodsQueryParams.prototype, "sort", void 0);
    return GetUserVodsQueryParams;
}(SpeakeasyBase));
export { GetUserVodsQueryParams };
var GetUserVodsRequest = /** @class */ (function (_super) {
    __extends(GetUserVodsRequest, _super);
    function GetUserVodsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserVodsPathParams)
    ], GetUserVodsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserVodsQueryParams)
    ], GetUserVodsRequest.prototype, "queryParams", void 0);
    return GetUserVodsRequest;
}(SpeakeasyBase));
export { GetUserVodsRequest };
var GetUserVodsResponse = /** @class */ (function (_super) {
    __extends(GetUserVodsResponse, _super);
    function GetUserVodsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserVodsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserVodsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetUserVodsResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.OnDemandPage }),
        __metadata("design:type", Array)
    ], GetUserVodsResponse.prototype, "onDemandPages", void 0);
    return GetUserVodsResponse;
}(SpeakeasyBase));
export { GetUserVodsResponse };
