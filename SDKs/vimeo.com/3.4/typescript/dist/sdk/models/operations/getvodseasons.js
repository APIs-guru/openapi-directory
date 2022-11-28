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
var GetVodSeasonsPathParams = /** @class */ (function (_super) {
    __extends(GetVodSeasonsPathParams, _super);
    function GetVodSeasonsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], GetVodSeasonsPathParams.prototype, "ondemandId", void 0);
    return GetVodSeasonsPathParams;
}(SpeakeasyBase));
export { GetVodSeasonsPathParams };
export var GetVodSeasonsDirectionEnum;
(function (GetVodSeasonsDirectionEnum) {
    GetVodSeasonsDirectionEnum["Asc"] = "asc";
    GetVodSeasonsDirectionEnum["Desc"] = "desc";
})(GetVodSeasonsDirectionEnum || (GetVodSeasonsDirectionEnum = {}));
export var GetVodSeasonsFilterEnum;
(function (GetVodSeasonsFilterEnum) {
    GetVodSeasonsFilterEnum["Viewable"] = "viewable";
})(GetVodSeasonsFilterEnum || (GetVodSeasonsFilterEnum = {}));
export var GetVodSeasonsSortEnum;
(function (GetVodSeasonsSortEnum) {
    GetVodSeasonsSortEnum["Date"] = "date";
    GetVodSeasonsSortEnum["Manual"] = "manual";
})(GetVodSeasonsSortEnum || (GetVodSeasonsSortEnum = {}));
var GetVodSeasonsQueryParams = /** @class */ (function (_super) {
    __extends(GetVodSeasonsQueryParams, _super);
    function GetVodSeasonsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetVodSeasonsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetVodSeasonsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVodSeasonsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVodSeasonsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVodSeasonsQueryParams.prototype, "sort", void 0);
    return GetVodSeasonsQueryParams;
}(SpeakeasyBase));
export { GetVodSeasonsQueryParams };
var GetVodSeasonsRequest = /** @class */ (function (_super) {
    __extends(GetVodSeasonsRequest, _super);
    function GetVodSeasonsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodSeasonsPathParams)
    ], GetVodSeasonsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodSeasonsQueryParams)
    ], GetVodSeasonsRequest.prototype, "queryParams", void 0);
    return GetVodSeasonsRequest;
}(SpeakeasyBase));
export { GetVodSeasonsRequest };
var GetVodSeasonsResponse = /** @class */ (function (_super) {
    __extends(GetVodSeasonsResponse, _super);
    function GetVodSeasonsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVodSeasonsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVodSeasonsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetVodSeasonsResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.OnDemandSeason }),
        __metadata("design:type", Array)
    ], GetVodSeasonsResponse.prototype, "onDemandSeasons", void 0);
    return GetVodSeasonsResponse;
}(SpeakeasyBase));
export { GetVodSeasonsResponse };
