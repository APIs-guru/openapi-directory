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
var LineStatusByIdsPathParams = /** @class */ (function (_super) {
    __extends(LineStatusByIdsPathParams, _super);
    function LineStatusByIdsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], LineStatusByIdsPathParams.prototype, "ids", void 0);
    return LineStatusByIdsPathParams;
}(SpeakeasyBase));
export { LineStatusByIdsPathParams };
var LineStatusByIdsQueryParams = /** @class */ (function (_super) {
    __extends(LineStatusByIdsQueryParams, _super);
    function LineStatusByIdsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=detail" }),
        __metadata("design:type", Boolean)
    ], LineStatusByIdsQueryParams.prototype, "detail", void 0);
    return LineStatusByIdsQueryParams;
}(SpeakeasyBase));
export { LineStatusByIdsQueryParams };
var LineStatusByIdsRequest = /** @class */ (function (_super) {
    __extends(LineStatusByIdsRequest, _super);
    function LineStatusByIdsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LineStatusByIdsPathParams)
    ], LineStatusByIdsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LineStatusByIdsQueryParams)
    ], LineStatusByIdsRequest.prototype, "queryParams", void 0);
    return LineStatusByIdsRequest;
}(SpeakeasyBase));
export { LineStatusByIdsRequest };
var LineStatusByIdsResponse = /** @class */ (function (_super) {
    __extends(LineStatusByIdsResponse, _super);
    function LineStatusByIdsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], LineStatusByIdsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LineStatusByIdsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LineStatusByIdsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesLine }),
        __metadata("design:type", Array)
    ], LineStatusByIdsResponse.prototype, "tflApiPresentationEntitiesLines", void 0);
    return LineStatusByIdsResponse;
}(SpeakeasyBase));
export { LineStatusByIdsResponse };
