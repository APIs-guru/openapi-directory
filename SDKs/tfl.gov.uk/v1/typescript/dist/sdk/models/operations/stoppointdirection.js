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
var StopPointDirectionPathParams = /** @class */ (function (_super) {
    __extends(StopPointDirectionPathParams, _super);
    function StopPointDirectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], StopPointDirectionPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=toStopPointId" }),
        __metadata("design:type", String)
    ], StopPointDirectionPathParams.prototype, "toStopPointId", void 0);
    return StopPointDirectionPathParams;
}(SpeakeasyBase));
export { StopPointDirectionPathParams };
var StopPointDirectionQueryParams = /** @class */ (function (_super) {
    __extends(StopPointDirectionQueryParams, _super);
    function StopPointDirectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lineId" }),
        __metadata("design:type", String)
    ], StopPointDirectionQueryParams.prototype, "lineId", void 0);
    return StopPointDirectionQueryParams;
}(SpeakeasyBase));
export { StopPointDirectionQueryParams };
var StopPointDirectionRequest = /** @class */ (function (_super) {
    __extends(StopPointDirectionRequest, _super);
    function StopPointDirectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopPointDirectionPathParams)
    ], StopPointDirectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopPointDirectionQueryParams)
    ], StopPointDirectionRequest.prototype, "queryParams", void 0);
    return StopPointDirectionRequest;
}(SpeakeasyBase));
export { StopPointDirectionRequest };
var StopPointDirectionResponse = /** @class */ (function (_super) {
    __extends(StopPointDirectionResponse, _super);
    function StopPointDirectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopPointDirectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StopPointDirectionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopPointDirectionResponse.prototype, "stopPointDirection200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopPointDirectionResponse.prototype, "stopPointDirection200ApplicationXmlString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopPointDirectionResponse.prototype, "stopPointDirection200TextJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopPointDirectionResponse.prototype, "stopPointDirection200TextXmlString", void 0);
    return StopPointDirectionResponse;
}(SpeakeasyBase));
export { StopPointDirectionResponse };
