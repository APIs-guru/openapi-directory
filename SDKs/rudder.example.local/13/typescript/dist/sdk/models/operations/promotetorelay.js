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
var PromoteToRelayPathParams = /** @class */ (function (_super) {
    __extends(PromoteToRelayPathParams, _super);
    function PromoteToRelayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], PromoteToRelayPathParams.prototype, "nodeId", void 0);
    return PromoteToRelayPathParams;
}(SpeakeasyBase));
export { PromoteToRelayPathParams };
export var PromoteToRelay200ApplicationJsonActionEnum;
(function (PromoteToRelay200ApplicationJsonActionEnum) {
    PromoteToRelay200ApplicationJsonActionEnum["PromoteToRelay"] = "promoteToRelay";
})(PromoteToRelay200ApplicationJsonActionEnum || (PromoteToRelay200ApplicationJsonActionEnum = {}));
export var PromoteToRelay200ApplicationJsonResultEnum;
(function (PromoteToRelay200ApplicationJsonResultEnum) {
    PromoteToRelay200ApplicationJsonResultEnum["Success"] = "success";
    PromoteToRelay200ApplicationJsonResultEnum["Error"] = "error";
})(PromoteToRelay200ApplicationJsonResultEnum || (PromoteToRelay200ApplicationJsonResultEnum = {}));
var PromoteToRelay200ApplicationJson = /** @class */ (function (_super) {
    __extends(PromoteToRelay200ApplicationJson, _super);
    function PromoteToRelay200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], PromoteToRelay200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], PromoteToRelay200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], PromoteToRelay200ApplicationJson.prototype, "result", void 0);
    return PromoteToRelay200ApplicationJson;
}(SpeakeasyBase));
export { PromoteToRelay200ApplicationJson };
var PromoteToRelayRequest = /** @class */ (function (_super) {
    __extends(PromoteToRelayRequest, _super);
    function PromoteToRelayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PromoteToRelayPathParams)
    ], PromoteToRelayRequest.prototype, "pathParams", void 0);
    return PromoteToRelayRequest;
}(SpeakeasyBase));
export { PromoteToRelayRequest };
var PromoteToRelayResponse = /** @class */ (function (_super) {
    __extends(PromoteToRelayResponse, _super);
    function PromoteToRelayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PromoteToRelayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PromoteToRelayResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PromoteToRelay200ApplicationJson)
    ], PromoteToRelayResponse.prototype, "promoteToRelay200ApplicationJsonObject", void 0);
    return PromoteToRelayResponse;
}(SpeakeasyBase));
export { PromoteToRelayResponse };
