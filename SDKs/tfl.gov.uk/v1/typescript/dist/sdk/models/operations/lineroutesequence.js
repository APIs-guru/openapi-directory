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
export var LineRouteSequenceDirectionEnum;
(function (LineRouteSequenceDirectionEnum) {
    LineRouteSequenceDirectionEnum["Inbound"] = "inbound";
    LineRouteSequenceDirectionEnum["Outbound"] = "outbound";
    LineRouteSequenceDirectionEnum["All"] = "all";
})(LineRouteSequenceDirectionEnum || (LineRouteSequenceDirectionEnum = {}));
var LineRouteSequencePathParams = /** @class */ (function (_super) {
    __extends(LineRouteSequencePathParams, _super);
    function LineRouteSequencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=direction" }),
        __metadata("design:type", String)
    ], LineRouteSequencePathParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], LineRouteSequencePathParams.prototype, "id", void 0);
    return LineRouteSequencePathParams;
}(SpeakeasyBase));
export { LineRouteSequencePathParams };
export var LineRouteSequenceServiceTypesEnum;
(function (LineRouteSequenceServiceTypesEnum) {
    LineRouteSequenceServiceTypesEnum["Regular"] = "Regular";
    LineRouteSequenceServiceTypesEnum["Night"] = "Night";
})(LineRouteSequenceServiceTypesEnum || (LineRouteSequenceServiceTypesEnum = {}));
var LineRouteSequenceQueryParams = /** @class */ (function (_super) {
    __extends(LineRouteSequenceQueryParams, _super);
    function LineRouteSequenceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeCrowding" }),
        __metadata("design:type", Boolean)
    ], LineRouteSequenceQueryParams.prototype, "excludeCrowding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" }),
        __metadata("design:type", Array)
    ], LineRouteSequenceQueryParams.prototype, "serviceTypes", void 0);
    return LineRouteSequenceQueryParams;
}(SpeakeasyBase));
export { LineRouteSequenceQueryParams };
var LineRouteSequenceRequest = /** @class */ (function (_super) {
    __extends(LineRouteSequenceRequest, _super);
    function LineRouteSequenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LineRouteSequencePathParams)
    ], LineRouteSequenceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LineRouteSequenceQueryParams)
    ], LineRouteSequenceRequest.prototype, "queryParams", void 0);
    return LineRouteSequenceRequest;
}(SpeakeasyBase));
export { LineRouteSequenceRequest };
var LineRouteSequenceResponse = /** @class */ (function (_super) {
    __extends(LineRouteSequenceResponse, _super);
    function LineRouteSequenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], LineRouteSequenceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LineRouteSequenceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LineRouteSequenceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TflApiPresentationEntitiesRouteSequence)
    ], LineRouteSequenceResponse.prototype, "tflApiPresentationEntitiesRouteSequence", void 0);
    return LineRouteSequenceResponse;
}(SpeakeasyBase));
export { LineRouteSequenceResponse };
