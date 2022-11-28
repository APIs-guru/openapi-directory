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
var StopPointSearchPathParams = /** @class */ (function (_super) {
    __extends(StopPointSearchPathParams, _super);
    function StopPointSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" }),
        __metadata("design:type", String)
    ], StopPointSearchPathParams.prototype, "query", void 0);
    return StopPointSearchPathParams;
}(SpeakeasyBase));
export { StopPointSearchPathParams };
var StopPointSearchQueryParams = /** @class */ (function (_super) {
    __extends(StopPointSearchQueryParams, _super);
    function StopPointSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=faresOnly" }),
        __metadata("design:type", Boolean)
    ], StopPointSearchQueryParams.prototype, "faresOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeHubs" }),
        __metadata("design:type", Boolean)
    ], StopPointSearchQueryParams.prototype, "includeHubs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lines" }),
        __metadata("design:type", Array)
    ], StopPointSearchQueryParams.prototype, "lines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], StopPointSearchQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" }),
        __metadata("design:type", Array)
    ], StopPointSearchQueryParams.prototype, "modes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tflOperatedNationalRailStationsOnly" }),
        __metadata("design:type", Boolean)
    ], StopPointSearchQueryParams.prototype, "tflOperatedNationalRailStationsOnly", void 0);
    return StopPointSearchQueryParams;
}(SpeakeasyBase));
export { StopPointSearchQueryParams };
var StopPointSearchRequest = /** @class */ (function (_super) {
    __extends(StopPointSearchRequest, _super);
    function StopPointSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopPointSearchPathParams)
    ], StopPointSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopPointSearchQueryParams)
    ], StopPointSearchRequest.prototype, "queryParams", void 0);
    return StopPointSearchRequest;
}(SpeakeasyBase));
export { StopPointSearchRequest };
var StopPointSearchResponse = /** @class */ (function (_super) {
    __extends(StopPointSearchResponse, _super);
    function StopPointSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], StopPointSearchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopPointSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StopPointSearchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TflApiPresentationEntitiesSearchResponse)
    ], StopPointSearchResponse.prototype, "tflApiPresentationEntitiesSearchResponse", void 0);
    return StopPointSearchResponse;
}(SpeakeasyBase));
export { StopPointSearchResponse };
