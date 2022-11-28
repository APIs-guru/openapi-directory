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
var NodeInheritedPropertiesPathParams = /** @class */ (function (_super) {
    __extends(NodeInheritedPropertiesPathParams, _super);
    function NodeInheritedPropertiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], NodeInheritedPropertiesPathParams.prototype, "nodeId", void 0);
    return NodeInheritedPropertiesPathParams;
}(SpeakeasyBase));
export { NodeInheritedPropertiesPathParams };
export var NodeInheritedProperties200ApplicationJsonActionEnum;
(function (NodeInheritedProperties200ApplicationJsonActionEnum) {
    NodeInheritedProperties200ApplicationJsonActionEnum["NodeInheritedProperties"] = "nodeInheritedProperties";
})(NodeInheritedProperties200ApplicationJsonActionEnum || (NodeInheritedProperties200ApplicationJsonActionEnum = {}));
export var NodeInheritedProperties200ApplicationJsonResultEnum;
(function (NodeInheritedProperties200ApplicationJsonResultEnum) {
    NodeInheritedProperties200ApplicationJsonResultEnum["Success"] = "success";
    NodeInheritedProperties200ApplicationJsonResultEnum["Error"] = "error";
})(NodeInheritedProperties200ApplicationJsonResultEnum || (NodeInheritedProperties200ApplicationJsonResultEnum = {}));
var NodeInheritedProperties200ApplicationJson = /** @class */ (function (_super) {
    __extends(NodeInheritedProperties200ApplicationJson, _super);
    function NodeInheritedProperties200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], NodeInheritedProperties200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.NodeInheritedProperties }),
        __metadata("design:type", Array)
    ], NodeInheritedProperties200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], NodeInheritedProperties200ApplicationJson.prototype, "result", void 0);
    return NodeInheritedProperties200ApplicationJson;
}(SpeakeasyBase));
export { NodeInheritedProperties200ApplicationJson };
var NodeInheritedPropertiesRequest = /** @class */ (function (_super) {
    __extends(NodeInheritedPropertiesRequest, _super);
    function NodeInheritedPropertiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NodeInheritedPropertiesPathParams)
    ], NodeInheritedPropertiesRequest.prototype, "pathParams", void 0);
    return NodeInheritedPropertiesRequest;
}(SpeakeasyBase));
export { NodeInheritedPropertiesRequest };
var NodeInheritedPropertiesResponse = /** @class */ (function (_super) {
    __extends(NodeInheritedPropertiesResponse, _super);
    function NodeInheritedPropertiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NodeInheritedPropertiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NodeInheritedPropertiesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NodeInheritedProperties200ApplicationJson)
    ], NodeInheritedPropertiesResponse.prototype, "nodeInheritedProperties200ApplicationJsonObject", void 0);
    return NodeInheritedPropertiesResponse;
}(SpeakeasyBase));
export { NodeInheritedPropertiesResponse };
