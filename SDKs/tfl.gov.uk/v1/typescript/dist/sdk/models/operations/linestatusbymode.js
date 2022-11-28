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
var LineStatusByModePathParams = /** @class */ (function (_super) {
    __extends(LineStatusByModePathParams, _super);
    function LineStatusByModePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modes" }),
        __metadata("design:type", Array)
    ], LineStatusByModePathParams.prototype, "modes", void 0);
    return LineStatusByModePathParams;
}(SpeakeasyBase));
export { LineStatusByModePathParams };
var LineStatusByModeQueryParams = /** @class */ (function (_super) {
    __extends(LineStatusByModeQueryParams, _super);
    function LineStatusByModeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=detail" }),
        __metadata("design:type", Boolean)
    ], LineStatusByModeQueryParams.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=severityLevel" }),
        __metadata("design:type", String)
    ], LineStatusByModeQueryParams.prototype, "severityLevel", void 0);
    return LineStatusByModeQueryParams;
}(SpeakeasyBase));
export { LineStatusByModeQueryParams };
var LineStatusByModeRequest = /** @class */ (function (_super) {
    __extends(LineStatusByModeRequest, _super);
    function LineStatusByModeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LineStatusByModePathParams)
    ], LineStatusByModeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LineStatusByModeQueryParams)
    ], LineStatusByModeRequest.prototype, "queryParams", void 0);
    return LineStatusByModeRequest;
}(SpeakeasyBase));
export { LineStatusByModeRequest };
var LineStatusByModeResponse = /** @class */ (function (_super) {
    __extends(LineStatusByModeResponse, _super);
    function LineStatusByModeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], LineStatusByModeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LineStatusByModeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LineStatusByModeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesLine }),
        __metadata("design:type", Array)
    ], LineStatusByModeResponse.prototype, "tflApiPresentationEntitiesLines", void 0);
    return LineStatusByModeResponse;
}(SpeakeasyBase));
export { LineStatusByModeResponse };
