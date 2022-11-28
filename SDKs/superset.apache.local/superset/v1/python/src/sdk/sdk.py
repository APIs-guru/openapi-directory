

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://superset.apache.local",
	"https://superset.apache.local/api/v1",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def delete_annotation_layer_(self, request: operations.DeleteAnnotationLayerRequest) -> operations.DeleteAnnotationLayerResponse:
        r"""Deletes multiple annotation layers in a bulk operation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/annotation_layer/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAnnotationLayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayer200ApplicationJSON])
                res.delete_annotation_layer_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayer401ApplicationJSON])
                res.delete_annotation_layer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayer404ApplicationJSON])
                res.delete_annotation_layer_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayer422ApplicationJSON])
                res.delete_annotation_layer_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayer500ApplicationJSON])
                res.delete_annotation_layer_500_application_json_object = out

        return res

    
    def delete_annotation_layer_pk_(self, request: operations.DeleteAnnotationLayerPkRequest) -> operations.DeleteAnnotationLayerPkResponse:
        r"""Delete Annotation layer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotation_layer/{pk}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAnnotationLayerPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayerPk200ApplicationJSON])
                res.delete_annotation_layer_pk_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayerPk404ApplicationJSON])
                res.delete_annotation_layer_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayerPk422ApplicationJSON])
                res.delete_annotation_layer_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayerPk500ApplicationJSON])
                res.delete_annotation_layer_pk_500_application_json_object = out

        return res

    
    def delete_annotation_layer_pk_annotation_(self, request: operations.DeleteAnnotationLayerPkAnnotationRequest) -> operations.DeleteAnnotationLayerPkAnnotationResponse:
        r"""Deletes multiple annotation in a bulk operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotation_layer/{pk}/annotation/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAnnotationLayerPkAnnotationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayerPkAnnotation200ApplicationJSON])
                res.delete_annotation_layer_pk_annotation_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayerPkAnnotation401ApplicationJSON])
                res.delete_annotation_layer_pk_annotation_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayerPkAnnotation404ApplicationJSON])
                res.delete_annotation_layer_pk_annotation_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayerPkAnnotation422ApplicationJSON])
                res.delete_annotation_layer_pk_annotation_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayerPkAnnotation500ApplicationJSON])
                res.delete_annotation_layer_pk_annotation_500_application_json_object = out

        return res

    
    def delete_annotation_layer_pk_annotation_annotation_id_(self, request: operations.DeleteAnnotationLayerPkAnnotationAnnotationIDRequest) -> operations.DeleteAnnotationLayerPkAnnotationAnnotationIDResponse:
        r"""Delete Annotation layer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotation_layer/{pk}/annotation/{annotation_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAnnotationLayerPkAnnotationAnnotationIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON])
                res.delete_annotation_layer_pk_annotation_annotation_id_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON])
                res.delete_annotation_layer_pk_annotation_annotation_id_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayerPkAnnotationAnnotationID422ApplicationJSON])
                res.delete_annotation_layer_pk_annotation_annotation_id_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON])
                res.delete_annotation_layer_pk_annotation_annotation_id_500_application_json_object = out

        return res

    
    def delete_chart_(self, request: operations.DeleteChartRequest) -> operations.DeleteChartResponse:
        r"""Deletes multiple Charts in a bulk operation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chart/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteChartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteChart200ApplicationJSON])
                res.delete_chart_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteChart401ApplicationJSON])
                res.delete_chart_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteChart403ApplicationJSON])
                res.delete_chart_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteChart404ApplicationJSON])
                res.delete_chart_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteChart422ApplicationJSON])
                res.delete_chart_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteChart500ApplicationJSON])
                res.delete_chart_500_application_json_object = out

        return res

    
    def delete_chart_pk_(self, request: operations.DeleteChartPkRequest) -> operations.DeleteChartPkResponse:
        r"""Deletes a Chart.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chart/{pk}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteChartPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteChartPk200ApplicationJSON])
                res.delete_chart_pk_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteChartPk401ApplicationJSON])
                res.delete_chart_pk_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteChartPk403ApplicationJSON])
                res.delete_chart_pk_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteChartPk404ApplicationJSON])
                res.delete_chart_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteChartPk422ApplicationJSON])
                res.delete_chart_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteChartPk500ApplicationJSON])
                res.delete_chart_pk_500_application_json_object = out

        return res

    
    def delete_css_template_(self, request: operations.DeleteCSSTemplateRequest) -> operations.DeleteCSSTemplateResponse:
        r"""Deletes multiple css templates in a bulk operation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/css_template/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCSSTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteCSSTemplate200ApplicationJSON])
                res.delete_css_template_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteCSSTemplate401ApplicationJSON])
                res.delete_css_template_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteCSSTemplate404ApplicationJSON])
                res.delete_css_template_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteCSSTemplate422ApplicationJSON])
                res.delete_css_template_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteCSSTemplate500ApplicationJSON])
                res.delete_css_template_500_application_json_object = out

        return res

    
    def delete_css_template_pk_(self, request: operations.DeleteCSSTemplatePkRequest) -> operations.DeleteCSSTemplatePkResponse:
        r"""Delete CSS template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/css_template/{pk}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCSSTemplatePkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteCSSTemplatePk200ApplicationJSON])
                res.delete_css_template_pk_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteCSSTemplatePk404ApplicationJSON])
                res.delete_css_template_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteCSSTemplatePk422ApplicationJSON])
                res.delete_css_template_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteCSSTemplatePk500ApplicationJSON])
                res.delete_css_template_pk_500_application_json_object = out

        return res

    
    def delete_dashboard_(self, request: operations.DeleteDashboardRequest) -> operations.DeleteDashboardResponse:
        r"""Deletes multiple Dashboards in a bulk operation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dashboard/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDashboardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDashboard200ApplicationJSON])
                res.delete_dashboard_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDashboard401ApplicationJSON])
                res.delete_dashboard_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDashboard403ApplicationJSON])
                res.delete_dashboard_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDashboard404ApplicationJSON])
                res.delete_dashboard_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDashboard422ApplicationJSON])
                res.delete_dashboard_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDashboard500ApplicationJSON])
                res.delete_dashboard_500_application_json_object = out

        return res

    
    def delete_dashboard_pk_(self, request: operations.DeleteDashboardPkRequest) -> operations.DeleteDashboardPkResponse:
        r"""Deletes a Dashboard.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dashboard/{pk}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDashboardPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDashboardPk200ApplicationJSON])
                res.delete_dashboard_pk_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDashboardPk401ApplicationJSON])
                res.delete_dashboard_pk_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDashboardPk403ApplicationJSON])
                res.delete_dashboard_pk_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDashboardPk404ApplicationJSON])
                res.delete_dashboard_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDashboardPk422ApplicationJSON])
                res.delete_dashboard_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDashboardPk500ApplicationJSON])
                res.delete_dashboard_pk_500_application_json_object = out

        return res

    
    def delete_database_pk_(self, request: operations.DeleteDatabasePkRequest) -> operations.DeleteDatabasePkResponse:
        r"""Deletes a Database.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/{pk}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDatabasePkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatabasePk200ApplicationJSON])
                res.delete_database_pk_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatabasePk401ApplicationJSON])
                res.delete_database_pk_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatabasePk403ApplicationJSON])
                res.delete_database_pk_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatabasePk404ApplicationJSON])
                res.delete_database_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatabasePk422ApplicationJSON])
                res.delete_database_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatabasePk500ApplicationJSON])
                res.delete_database_pk_500_application_json_object = out

        return res

    
    def delete_dataset_(self, request: operations.DeleteDatasetRequest) -> operations.DeleteDatasetResponse:
        r"""Deletes multiple Datasets in a bulk operation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dataset/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDatasetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDataset200ApplicationJSON])
                res.delete_dataset_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDataset400ApplicationJSON])
                res.delete_dataset_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDataset401ApplicationJSON])
                res.delete_dataset_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDataset403ApplicationJSON])
                res.delete_dataset_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDataset404ApplicationJSON])
                res.delete_dataset_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDataset422ApplicationJSON])
                res.delete_dataset_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDataset500ApplicationJSON])
                res.delete_dataset_500_application_json_object = out

        return res

    
    def delete_dataset_pk_(self, request: operations.DeleteDatasetPkRequest) -> operations.DeleteDatasetPkResponse:
        r"""Deletes a Dataset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dataset/{pk}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDatasetPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPk200ApplicationJSON])
                res.delete_dataset_pk_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPk401ApplicationJSON])
                res.delete_dataset_pk_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPk403ApplicationJSON])
                res.delete_dataset_pk_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPk404ApplicationJSON])
                res.delete_dataset_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPk422ApplicationJSON])
                res.delete_dataset_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPk500ApplicationJSON])
                res.delete_dataset_pk_500_application_json_object = out

        return res

    
    def delete_dataset_pk_column_column_id_(self, request: operations.DeleteDatasetPkColumnColumnIDRequest) -> operations.DeleteDatasetPkColumnColumnIDResponse:
        r"""Delete a Dataset column
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dataset/{pk}/column/{column_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDatasetPkColumnColumnIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPkColumnColumnID200ApplicationJSON])
                res.delete_dataset_pk_column_column_id_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPkColumnColumnID401ApplicationJSON])
                res.delete_dataset_pk_column_column_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPkColumnColumnID403ApplicationJSON])
                res.delete_dataset_pk_column_column_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPkColumnColumnID404ApplicationJSON])
                res.delete_dataset_pk_column_column_id_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPkColumnColumnID422ApplicationJSON])
                res.delete_dataset_pk_column_column_id_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPkColumnColumnID500ApplicationJSON])
                res.delete_dataset_pk_column_column_id_500_application_json_object = out

        return res

    
    def delete_dataset_pk_metric_metric_id_(self, request: operations.DeleteDatasetPkMetricMetricIDRequest) -> operations.DeleteDatasetPkMetricMetricIDResponse:
        r"""Delete a Dataset metric
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dataset/{pk}/metric/{metric_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDatasetPkMetricMetricIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPkMetricMetricID200ApplicationJSON])
                res.delete_dataset_pk_metric_metric_id_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPkMetricMetricID401ApplicationJSON])
                res.delete_dataset_pk_metric_metric_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPkMetricMetricID403ApplicationJSON])
                res.delete_dataset_pk_metric_metric_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPkMetricMetricID404ApplicationJSON])
                res.delete_dataset_pk_metric_metric_id_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPkMetricMetricID422ApplicationJSON])
                res.delete_dataset_pk_metric_metric_id_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDatasetPkMetricMetricID500ApplicationJSON])
                res.delete_dataset_pk_metric_metric_id_500_application_json_object = out

        return res

    
    def delete_report_(self, request: operations.DeleteReportRequest) -> operations.DeleteReportResponse:
        r"""Deletes multiple report schedules in a bulk operation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/report/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteReport200ApplicationJSON])
                res.delete_report_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteReport401ApplicationJSON])
                res.delete_report_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteReport403ApplicationJSON])
                res.delete_report_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteReport404ApplicationJSON])
                res.delete_report_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteReport422ApplicationJSON])
                res.delete_report_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteReport500ApplicationJSON])
                res.delete_report_500_application_json_object = out

        return res

    
    def delete_report_pk_(self, request: operations.DeleteReportPkRequest) -> operations.DeleteReportPkResponse:
        r"""Delete a report schedule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/report/{pk}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteReportPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteReportPk200ApplicationJSON])
                res.delete_report_pk_200_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteReportPk403ApplicationJSON])
                res.delete_report_pk_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteReportPk404ApplicationJSON])
                res.delete_report_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteReportPk422ApplicationJSON])
                res.delete_report_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteReportPk500ApplicationJSON])
                res.delete_report_pk_500_application_json_object = out

        return res

    
    def delete_saved_query_(self, request: operations.DeleteSavedQueryRequest) -> operations.DeleteSavedQueryResponse:
        r"""Deletes multiple saved queries in a bulk operation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/saved_query/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSavedQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSavedQuery200ApplicationJSON])
                res.delete_saved_query_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSavedQuery401ApplicationJSON])
                res.delete_saved_query_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSavedQuery404ApplicationJSON])
                res.delete_saved_query_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSavedQuery422ApplicationJSON])
                res.delete_saved_query_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSavedQuery500ApplicationJSON])
                res.delete_saved_query_500_application_json_object = out

        return res

    
    def delete_saved_query_pk_(self, request: operations.DeleteSavedQueryPkRequest) -> operations.DeleteSavedQueryPkResponse:
        r"""Delete saved query
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/saved_query/{pk}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSavedQueryPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSavedQueryPk200ApplicationJSON])
                res.delete_saved_query_pk_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSavedQueryPk404ApplicationJSON])
                res.delete_saved_query_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSavedQueryPk422ApplicationJSON])
                res.delete_saved_query_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSavedQueryPk500ApplicationJSON])
                res.delete_saved_query_pk_500_application_json_object = out

        return res

    
    def get_annotation_layer_(self, request: operations.GetAnnotationLayerRequest) -> operations.GetAnnotationLayerResponse:
        r"""Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/annotation_layer/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationLayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayer200ApplicationJSON])
                res.get_annotation_layer_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayer400ApplicationJSON])
                res.get_annotation_layer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayer401ApplicationJSON])
                res.get_annotation_layer_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayer422ApplicationJSON])
                res.get_annotation_layer_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayer500ApplicationJSON])
                res.get_annotation_layer_500_application_json_object = out

        return res

    
    def get_annotation_layer_info(self, request: operations.GetAnnotationLayerInfoRequest) -> operations.GetAnnotationLayerInfoResponse:
        r"""Get metadata information about this API resource
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/annotation_layer/_info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationLayerInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerInfo200ApplicationJSON])
                res.get_annotation_layer_info_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerInfo400ApplicationJSON])
                res.get_annotation_layer_info_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerInfo401ApplicationJSON])
                res.get_annotation_layer_info_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerInfo422ApplicationJSON])
                res.get_annotation_layer_info_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerInfo500ApplicationJSON])
                res.get_annotation_layer_info_500_application_json_object = out

        return res

    
    def get_annotation_layer_pk_(self, request: operations.GetAnnotationLayerPkRequest) -> operations.GetAnnotationLayerPkResponse:
        r"""Get an Annotation layer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotation_layer/{pk}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationLayerPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPk200ApplicationJSON])
                res.get_annotation_layer_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPk400ApplicationJSON])
                res.get_annotation_layer_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPk401ApplicationJSON])
                res.get_annotation_layer_pk_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPk404ApplicationJSON])
                res.get_annotation_layer_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPk422ApplicationJSON])
                res.get_annotation_layer_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPk500ApplicationJSON])
                res.get_annotation_layer_pk_500_application_json_object = out

        return res

    
    def get_annotation_layer_pk_annotation_(self, request: operations.GetAnnotationLayerPkAnnotationRequest) -> operations.GetAnnotationLayerPkAnnotationResponse:
        r"""Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotation_layer/{pk}/annotation/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationLayerPkAnnotationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPkAnnotation200ApplicationJSON])
                res.get_annotation_layer_pk_annotation_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPkAnnotation400ApplicationJSON])
                res.get_annotation_layer_pk_annotation_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPkAnnotation401ApplicationJSON])
                res.get_annotation_layer_pk_annotation_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPkAnnotation422ApplicationJSON])
                res.get_annotation_layer_pk_annotation_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPkAnnotation500ApplicationJSON])
                res.get_annotation_layer_pk_annotation_500_application_json_object = out

        return res

    
    def get_annotation_layer_pk_annotation_annotation_id_(self, request: operations.GetAnnotationLayerPkAnnotationAnnotationIDRequest) -> operations.GetAnnotationLayerPkAnnotationAnnotationIDResponse:
        r"""Get an Annotation layer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotation_layer/{pk}/annotation/{annotation_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationLayerPkAnnotationAnnotationIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON])
                res.get_annotation_layer_pk_annotation_annotation_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPkAnnotationAnnotationID400ApplicationJSON])
                res.get_annotation_layer_pk_annotation_annotation_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPkAnnotationAnnotationID401ApplicationJSON])
                res.get_annotation_layer_pk_annotation_annotation_id_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON])
                res.get_annotation_layer_pk_annotation_annotation_id_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPkAnnotationAnnotationID422ApplicationJSON])
                res.get_annotation_layer_pk_annotation_annotation_id_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON])
                res.get_annotation_layer_pk_annotation_annotation_id_500_application_json_object = out

        return res

    
    def get_annotation_layer_related_column_name_(self, request: operations.GetAnnotationLayerRelatedColumnNameRequest) -> operations.GetAnnotationLayerRelatedColumnNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotation_layer/related/{column_name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationLayerRelatedColumnNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedResponseSchema])
                res.related_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerRelatedColumnName400ApplicationJSON])
                res.get_annotation_layer_related_column_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerRelatedColumnName401ApplicationJSON])
                res.get_annotation_layer_related_column_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerRelatedColumnName404ApplicationJSON])
                res.get_annotation_layer_related_column_name_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAnnotationLayerRelatedColumnName500ApplicationJSON])
                res.get_annotation_layer_related_column_name_500_application_json_object = out

        return res

    
    def get_async_event_(self, request: operations.GetAsyncEventRequest) -> operations.GetAsyncEventResponse:
        r"""Reads off of the Redis events stream, using the user's JWT token and optional query params for last event received.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/async_event/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAsyncEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAsyncEvent200ApplicationJSON])
                res.get_async_event_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAsyncEvent401ApplicationJSON])
                res.get_async_event_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAsyncEvent500ApplicationJSON])
                res.get_async_event_500_application_json_object = out

        return res

    
    def get_chart_(self, request: operations.GetChartRequest) -> operations.GetChartResponse:
        r"""Get a list of charts, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chart/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChart200ApplicationJSON])
                res.get_chart_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChart400ApplicationJSON])
                res.get_chart_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChart401ApplicationJSON])
                res.get_chart_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChart422ApplicationJSON])
                res.get_chart_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChart500ApplicationJSON])
                res.get_chart_500_application_json_object = out

        return res

    
    def get_chart_data_cache_key_(self, request: operations.GetChartDataCacheKeyRequest) -> operations.GetChartDataCacheKeyResponse:
        r"""Takes a query context cache key and returns payload data response for the given query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chart/data/{cache_key}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChartDataCacheKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChartDataResponseSchema])
                res.chart_data_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartDataCacheKey400ApplicationJSON])
                res.get_chart_data_cache_key_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartDataCacheKey401ApplicationJSON])
                res.get_chart_data_cache_key_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartDataCacheKey404ApplicationJSON])
                res.get_chart_data_cache_key_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartDataCacheKey422ApplicationJSON])
                res.get_chart_data_cache_key_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartDataCacheKey500ApplicationJSON])
                res.get_chart_data_cache_key_500_application_json_object = out

        return res

    
    def get_chart_export_(self, request: operations.GetChartExportRequest) -> operations.GetChartExportResponse:
        r"""Exports multiple charts and downloads them as YAML files
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chart/export/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChartExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.get_chart_export_200_application_zip_binary_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartExport400ApplicationJSON])
                res.get_chart_export_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartExport401ApplicationJSON])
                res.get_chart_export_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartExport404ApplicationJSON])
                res.get_chart_export_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartExport500ApplicationJSON])
                res.get_chart_export_500_application_json_object = out

        return res

    
    def get_chart_favorite_status_(self, request: operations.GetChartFavoriteStatusRequest) -> operations.GetChartFavoriteStatusResponse:
        r"""Check favorited dashboards for current user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chart/favorite_status/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChartFavoriteStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetFavStarIdsSchema])
                res.get_fav_star_ids_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartFavoriteStatus400ApplicationJSON])
                res.get_chart_favorite_status_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartFavoriteStatus401ApplicationJSON])
                res.get_chart_favorite_status_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartFavoriteStatus404ApplicationJSON])
                res.get_chart_favorite_status_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartFavoriteStatus500ApplicationJSON])
                res.get_chart_favorite_status_500_application_json_object = out

        return res

    
    def get_chart_info(self, request: operations.GetChartInfoRequest) -> operations.GetChartInfoResponse:
        r"""Several metadata information about chart API endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chart/_info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChartInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartInfo200ApplicationJSON])
                res.get_chart_info_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartInfo400ApplicationJSON])
                res.get_chart_info_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartInfo401ApplicationJSON])
                res.get_chart_info_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartInfo422ApplicationJSON])
                res.get_chart_info_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartInfo500ApplicationJSON])
                res.get_chart_info_500_application_json_object = out

        return res

    
    def get_chart_pk_(self, request: operations.GetChartPkRequest) -> operations.GetChartPkResponse:
        r"""Get a chart detail information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chart/{pk}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChartPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPk200ApplicationJSON])
                res.get_chart_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPk400ApplicationJSON])
                res.get_chart_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPk401ApplicationJSON])
                res.get_chart_pk_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPk404ApplicationJSON])
                res.get_chart_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPk422ApplicationJSON])
                res.get_chart_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPk500ApplicationJSON])
                res.get_chart_pk_500_application_json_object = out

        return res

    
    def get_chart_pk_cache_screenshot_(self, request: operations.GetChartPkCacheScreenshotRequest) -> operations.GetChartPkCacheScreenshotResponse:
        r"""Compute and cache a screenshot.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chart/{pk}/cache_screenshot/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChartPkCacheScreenshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChartCacheScreenshotResponseSchema])
                res.chart_cache_screenshot_response_schema = out
        elif r.status_code == 302:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkCacheScreenshot400ApplicationJSON])
                res.get_chart_pk_cache_screenshot_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkCacheScreenshot401ApplicationJSON])
                res.get_chart_pk_cache_screenshot_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkCacheScreenshot404ApplicationJSON])
                res.get_chart_pk_cache_screenshot_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkCacheScreenshot500ApplicationJSON])
                res.get_chart_pk_cache_screenshot_500_application_json_object = out

        return res

    
    def get_chart_pk_data_(self, request: operations.GetChartPkDataRequest) -> operations.GetChartPkDataResponse:
        r"""Takes a chart ID and uses the query context stored when the chart was saved to return payload data response.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chart/{pk}/data/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChartPkDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChartDataResponseSchema])
                res.chart_data_response_schema = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChartDataAsyncResponseSchema])
                res.chart_data_async_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkData400ApplicationJSON])
                res.get_chart_pk_data_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkData401ApplicationJSON])
                res.get_chart_pk_data_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkData500ApplicationJSON])
                res.get_chart_pk_data_500_application_json_object = out

        return res

    
    def get_chart_pk_screenshot_digest_(self, request: operations.GetChartPkScreenshotDigestRequest) -> operations.GetChartPkScreenshotDigestResponse:
        r"""Get a computed screenshot from cache.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chart/{pk}/screenshot/{digest}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChartPkScreenshotDigestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_chart_pk_screenshot_digest_200_image_wildcard_binary_string = r.content
        elif r.status_code == 302:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkScreenshotDigest400ApplicationJSON])
                res.get_chart_pk_screenshot_digest_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkScreenshotDigest401ApplicationJSON])
                res.get_chart_pk_screenshot_digest_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkScreenshotDigest404ApplicationJSON])
                res.get_chart_pk_screenshot_digest_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkScreenshotDigest500ApplicationJSON])
                res.get_chart_pk_screenshot_digest_500_application_json_object = out

        return res

    
    def get_chart_pk_thumbnail_digest_(self, request: operations.GetChartPkThumbnailDigestRequest) -> operations.GetChartPkThumbnailDigestResponse:
        r"""Compute or get already computed chart thumbnail from cache.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chart/{pk}/thumbnail/{digest}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChartPkThumbnailDigestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_chart_pk_thumbnail_digest_200_image_wildcard_binary_string = r.content
        elif r.status_code == 302:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkThumbnailDigest400ApplicationJSON])
                res.get_chart_pk_thumbnail_digest_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkThumbnailDigest401ApplicationJSON])
                res.get_chart_pk_thumbnail_digest_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkThumbnailDigest404ApplicationJSON])
                res.get_chart_pk_thumbnail_digest_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartPkThumbnailDigest500ApplicationJSON])
                res.get_chart_pk_thumbnail_digest_500_application_json_object = out

        return res

    
    def get_chart_related_column_name_(self, request: operations.GetChartRelatedColumnNameRequest) -> operations.GetChartRelatedColumnNameResponse:
        r"""Get a list of all possible owners for a chart. Use `owners` has the `column_name` parameter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chart/related/{column_name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChartRelatedColumnNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedResponseSchema])
                res.related_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartRelatedColumnName400ApplicationJSON])
                res.get_chart_related_column_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartRelatedColumnName401ApplicationJSON])
                res.get_chart_related_column_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartRelatedColumnName404ApplicationJSON])
                res.get_chart_related_column_name_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChartRelatedColumnName500ApplicationJSON])
                res.get_chart_related_column_name_500_application_json_object = out

        return res

    
    def get_css_template_(self, request: operations.GetCSSTemplateRequest) -> operations.GetCSSTemplateResponse:
        r"""Get a list of CSS templates, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/css_template/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCSSTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplate200ApplicationJSON])
                res.get_css_template_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplate400ApplicationJSON])
                res.get_css_template_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplate401ApplicationJSON])
                res.get_css_template_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplate422ApplicationJSON])
                res.get_css_template_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplate500ApplicationJSON])
                res.get_css_template_500_application_json_object = out

        return res

    
    def get_css_template_info(self, request: operations.GetCSSTemplateInfoRequest) -> operations.GetCSSTemplateInfoResponse:
        r"""Get metadata information about this API resource
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/css_template/_info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCSSTemplateInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplateInfo200ApplicationJSON])
                res.get_css_template_info_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplateInfo400ApplicationJSON])
                res.get_css_template_info_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplateInfo401ApplicationJSON])
                res.get_css_template_info_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplateInfo422ApplicationJSON])
                res.get_css_template_info_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplateInfo500ApplicationJSON])
                res.get_css_template_info_500_application_json_object = out

        return res

    
    def get_css_template_pk_(self, request: operations.GetCSSTemplatePkRequest) -> operations.GetCSSTemplatePkResponse:
        r"""Get a CSS template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/css_template/{pk}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCSSTemplatePkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplatePk200ApplicationJSON])
                res.get_css_template_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplatePk400ApplicationJSON])
                res.get_css_template_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplatePk401ApplicationJSON])
                res.get_css_template_pk_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplatePk404ApplicationJSON])
                res.get_css_template_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplatePk422ApplicationJSON])
                res.get_css_template_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplatePk500ApplicationJSON])
                res.get_css_template_pk_500_application_json_object = out

        return res

    
    def get_css_template_related_column_name_(self, request: operations.GetCSSTemplateRelatedColumnNameRequest) -> operations.GetCSSTemplateRelatedColumnNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/css_template/related/{column_name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCSSTemplateRelatedColumnNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedResponseSchema])
                res.related_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplateRelatedColumnName400ApplicationJSON])
                res.get_css_template_related_column_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplateRelatedColumnName401ApplicationJSON])
                res.get_css_template_related_column_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplateRelatedColumnName404ApplicationJSON])
                res.get_css_template_related_column_name_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCSSTemplateRelatedColumnName500ApplicationJSON])
                res.get_css_template_related_column_name_500_application_json_object = out

        return res

    
    def get_dashboard_(self, request: operations.GetDashboardRequest) -> operations.GetDashboardResponse:
        r"""Get a list of dashboards, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dashboard/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDashboardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboard200ApplicationJSON])
                res.get_dashboard_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboard400ApplicationJSON])
                res.get_dashboard_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboard401ApplicationJSON])
                res.get_dashboard_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboard422ApplicationJSON])
                res.get_dashboard_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboard500ApplicationJSON])
                res.get_dashboard_500_application_json_object = out

        return res

    
    def get_dashboard_export_(self, request: operations.GetDashboardExportRequest) -> operations.GetDashboardExportResponse:
        r"""Exports multiple Dashboards and downloads them as YAML files.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dashboard/export/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDashboardExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.get_dashboard_export_200_text_plain_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardExport400ApplicationJSON])
                res.get_dashboard_export_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardExport401ApplicationJSON])
                res.get_dashboard_export_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardExport404ApplicationJSON])
                res.get_dashboard_export_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardExport422ApplicationJSON])
                res.get_dashboard_export_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardExport500ApplicationJSON])
                res.get_dashboard_export_500_application_json_object = out

        return res

    
    def get_dashboard_favorite_status_(self, request: operations.GetDashboardFavoriteStatusRequest) -> operations.GetDashboardFavoriteStatusResponse:
        r"""Check favorited dashboards for current user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dashboard/favorite_status/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDashboardFavoriteStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetFavStarIdsSchema])
                res.get_fav_star_ids_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardFavoriteStatus400ApplicationJSON])
                res.get_dashboard_favorite_status_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardFavoriteStatus401ApplicationJSON])
                res.get_dashboard_favorite_status_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardFavoriteStatus404ApplicationJSON])
                res.get_dashboard_favorite_status_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardFavoriteStatus500ApplicationJSON])
                res.get_dashboard_favorite_status_500_application_json_object = out

        return res

    
    def get_dashboard_id_or_slug_(self, request: operations.GetDashboardIDOrSlugRequest) -> operations.GetDashboardIDOrSlugResponse:
        r"""Get a dashboard detail information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dashboard/{id_or_slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDashboardIDOrSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardIDOrSlug200ApplicationJSON])
                res.get_dashboard_id_or_slug_200_application_json_object = out
        elif r.status_code == 302:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardIDOrSlug400ApplicationJSON])
                res.get_dashboard_id_or_slug_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardIDOrSlug401ApplicationJSON])
                res.get_dashboard_id_or_slug_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardIDOrSlug404ApplicationJSON])
                res.get_dashboard_id_or_slug_404_application_json_object = out

        return res

    
    def get_dashboard_id_or_slug_charts(self, request: operations.GetDashboardIDOrSlugChartsRequest) -> operations.GetDashboardIDOrSlugChartsResponse:
        r"""Get the chart definitions for a given dashboard
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dashboard/{id_or_slug}/charts", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDashboardIDOrSlugChartsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardIDOrSlugCharts200ApplicationJSON])
                res.get_dashboard_id_or_slug_charts_200_application_json_object = out
        elif r.status_code == 302:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardIDOrSlugCharts400ApplicationJSON])
                res.get_dashboard_id_or_slug_charts_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardIDOrSlugCharts401ApplicationJSON])
                res.get_dashboard_id_or_slug_charts_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardIDOrSlugCharts404ApplicationJSON])
                res.get_dashboard_id_or_slug_charts_404_application_json_object = out

        return res

    
    def get_dashboard_id_or_slug_datasets(self, request: operations.GetDashboardIDOrSlugDatasetsRequest) -> operations.GetDashboardIDOrSlugDatasetsResponse:
        r"""Returns a list of a dashboard's datasets. Each dataset includes only the information necessary to render the dashboard's charts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dashboard/{id_or_slug}/datasets", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDashboardIDOrSlugDatasetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardIDOrSlugDatasets200ApplicationJSON])
                res.get_dashboard_id_or_slug_datasets_200_application_json_object = out
        elif r.status_code == 302:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardIDOrSlugDatasets400ApplicationJSON])
                res.get_dashboard_id_or_slug_datasets_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardIDOrSlugDatasets401ApplicationJSON])
                res.get_dashboard_id_or_slug_datasets_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardIDOrSlugDatasets404ApplicationJSON])
                res.get_dashboard_id_or_slug_datasets_404_application_json_object = out

        return res

    
    def get_dashboard_info(self, request: operations.GetDashboardInfoRequest) -> operations.GetDashboardInfoResponse:
        r"""Several metadata information about dashboard API endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dashboard/_info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDashboardInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardInfo200ApplicationJSON])
                res.get_dashboard_info_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardInfo400ApplicationJSON])
                res.get_dashboard_info_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardInfo401ApplicationJSON])
                res.get_dashboard_info_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardInfo422ApplicationJSON])
                res.get_dashboard_info_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardInfo500ApplicationJSON])
                res.get_dashboard_info_500_application_json_object = out

        return res

    
    def get_dashboard_pk_thumbnail_digest_(self, request: operations.GetDashboardPkThumbnailDigestRequest) -> operations.GetDashboardPkThumbnailDigestResponse:
        r"""Compute async or get already computed dashboard thumbnail from cache.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dashboard/{pk}/thumbnail/{digest}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDashboardPkThumbnailDigestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_dashboard_pk_thumbnail_digest_200_image_wildcard_binary_string = r.content
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardPkThumbnailDigest202ApplicationJSON])
                res.get_dashboard_pk_thumbnail_digest_202_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardPkThumbnailDigest401ApplicationJSON])
                res.get_dashboard_pk_thumbnail_digest_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardPkThumbnailDigest404ApplicationJSON])
                res.get_dashboard_pk_thumbnail_digest_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardPkThumbnailDigest422ApplicationJSON])
                res.get_dashboard_pk_thumbnail_digest_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardPkThumbnailDigest500ApplicationJSON])
                res.get_dashboard_pk_thumbnail_digest_500_application_json_object = out

        return res

    
    def get_dashboard_related_column_name_(self, request: operations.GetDashboardRelatedColumnNameRequest) -> operations.GetDashboardRelatedColumnNameResponse:
        r"""Get a list of all possible owners for a dashboard.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dashboard/related/{column_name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDashboardRelatedColumnNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedResponseSchema])
                res.related_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardRelatedColumnName400ApplicationJSON])
                res.get_dashboard_related_column_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardRelatedColumnName401ApplicationJSON])
                res.get_dashboard_related_column_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardRelatedColumnName404ApplicationJSON])
                res.get_dashboard_related_column_name_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDashboardRelatedColumnName500ApplicationJSON])
                res.get_dashboard_related_column_name_500_application_json_object = out

        return res

    
    def get_database_(self, request: operations.GetDatabaseRequest) -> operations.GetDatabaseResponse:
        r"""Get a list of models
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/database/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatabaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabase200ApplicationJSON])
                res.get_database_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabase400ApplicationJSON])
                res.get_database_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabase401ApplicationJSON])
                res.get_database_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabase422ApplicationJSON])
                res.get_database_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabase500ApplicationJSON])
                res.get_database_500_application_json_object = out

        return res

    
    def get_database_available_(self, request: operations.GetDatabaseAvailableRequest) -> operations.GetDatabaseAvailableResponse:
        r"""Get names of databases currently available
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/database/available/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatabaseAvailableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetDatabaseAvailable200ApplicationJSON]])
                res.get_database_available_200_application_json_objects = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabaseAvailable400ApplicationJSON])
                res.get_database_available_400_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabaseAvailable500ApplicationJSON])
                res.get_database_available_500_application_json_object = out

        return res

    
    def get_database_export_(self, request: operations.GetDatabaseExportRequest) -> operations.GetDatabaseExportResponse:
        r"""Download database(s) and associated dataset(s) as a zip file
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/database/export/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatabaseExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.get_database_export_200_application_zip_binary_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabaseExport401ApplicationJSON])
                res.get_database_export_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabaseExport404ApplicationJSON])
                res.get_database_export_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabaseExport500ApplicationJSON])
                res.get_database_export_500_application_json_object = out

        return res

    
    def get_database_info(self, request: operations.GetDatabaseInfoRequest) -> operations.GetDatabaseInfoResponse:
        r"""Get metadata information about this API resource
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/database/_info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatabaseInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabaseInfo200ApplicationJSON])
                res.get_database_info_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabaseInfo400ApplicationJSON])
                res.get_database_info_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabaseInfo401ApplicationJSON])
                res.get_database_info_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabaseInfo422ApplicationJSON])
                res.get_database_info_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabaseInfo500ApplicationJSON])
                res.get_database_info_500_application_json_object = out

        return res

    
    def get_database_pk_(self, request: operations.GetDatabasePkRequest) -> operations.GetDatabasePkResponse:
        r"""Get an item model
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/{pk}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatabasePkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePk200ApplicationJSON])
                res.get_database_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePk400ApplicationJSON])
                res.get_database_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePk401ApplicationJSON])
                res.get_database_pk_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePk404ApplicationJSON])
                res.get_database_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePk422ApplicationJSON])
                res.get_database_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePk500ApplicationJSON])
                res.get_database_pk_500_application_json_object = out

        return res

    
    def get_database_pk_function_names_(self, request: operations.GetDatabasePkFunctionNamesRequest) -> operations.GetDatabasePkFunctionNamesResponse:
        r"""Get function names supported by a database
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/{pk}/function_names/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatabasePkFunctionNamesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DatabaseFunctionNamesResponse])
                res.database_function_names_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkFunctionNames401ApplicationJSON])
                res.get_database_pk_function_names_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkFunctionNames404ApplicationJSON])
                res.get_database_pk_function_names_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkFunctionNames500ApplicationJSON])
                res.get_database_pk_function_names_500_application_json_object = out

        return res

    
    def get_database_pk_related_objects_(self, request: operations.GetDatabasePkRelatedObjectsRequest) -> operations.GetDatabasePkRelatedObjectsResponse:
        r"""Get charts and dashboards count associated to a database
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/{pk}/related_objects/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatabasePkRelatedObjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DatabaseRelatedObjectsResponse])
                res.database_related_objects_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkRelatedObjects401ApplicationJSON])
                res.get_database_pk_related_objects_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkRelatedObjects404ApplicationJSON])
                res.get_database_pk_related_objects_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkRelatedObjects500ApplicationJSON])
                res.get_database_pk_related_objects_500_application_json_object = out

        return res

    
    def get_database_pk_schemas_(self, request: operations.GetDatabasePkSchemasRequest) -> operations.GetDatabasePkSchemasResponse:
        r"""Get all schemas from a database
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/{pk}/schemas/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatabasePkSchemasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchemasResponseSchema])
                res.schemas_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSchemas400ApplicationJSON])
                res.get_database_pk_schemas_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSchemas401ApplicationJSON])
                res.get_database_pk_schemas_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSchemas404ApplicationJSON])
                res.get_database_pk_schemas_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSchemas500ApplicationJSON])
                res.get_database_pk_schemas_500_application_json_object = out

        return res

    
    def get_database_pk_select_star_table_name_(self, request: operations.GetDatabasePkSelectStarTableNameRequest) -> operations.GetDatabasePkSelectStarTableNameResponse:
        r"""Get database select star for table
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/{pk}/select_star/{table_name}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatabasePkSelectStarTableNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SelectStarResponseSchema])
                res.select_star_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSelectStarTableName400ApplicationJSON])
                res.get_database_pk_select_star_table_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSelectStarTableName401ApplicationJSON])
                res.get_database_pk_select_star_table_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSelectStarTableName404ApplicationJSON])
                res.get_database_pk_select_star_table_name_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSelectStarTableName422ApplicationJSON])
                res.get_database_pk_select_star_table_name_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSelectStarTableName500ApplicationJSON])
                res.get_database_pk_select_star_table_name_500_application_json_object = out

        return res

    
    def get_database_pk_select_star_table_name_schema_name_(self, request: operations.GetDatabasePkSelectStarTableNameSchemaNameRequest) -> operations.GetDatabasePkSelectStarTableNameSchemaNameResponse:
        r"""Get database select star for table
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/{pk}/select_star/{table_name}/{schema_name}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatabasePkSelectStarTableNameSchemaNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SelectStarResponseSchema])
                res.select_star_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSelectStarTableNameSchemaName400ApplicationJSON])
                res.get_database_pk_select_star_table_name_schema_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSelectStarTableNameSchemaName401ApplicationJSON])
                res.get_database_pk_select_star_table_name_schema_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSelectStarTableNameSchemaName404ApplicationJSON])
                res.get_database_pk_select_star_table_name_schema_name_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSelectStarTableNameSchemaName422ApplicationJSON])
                res.get_database_pk_select_star_table_name_schema_name_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkSelectStarTableNameSchemaName500ApplicationJSON])
                res.get_database_pk_select_star_table_name_schema_name_500_application_json_object = out

        return res

    
    def get_database_pk_table_table_name_schema_name_(self, request: operations.GetDatabasePkTableTableNameSchemaNameRequest) -> operations.GetDatabasePkTableTableNameSchemaNameResponse:
        r"""Get database table metadata
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/{pk}/table/{table_name}/{schema_name}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatabasePkTableTableNameSchemaNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TableMetadataResponseSchema])
                res.table_metadata_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkTableTableNameSchemaName400ApplicationJSON])
                res.get_database_pk_table_table_name_schema_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkTableTableNameSchemaName401ApplicationJSON])
                res.get_database_pk_table_table_name_schema_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkTableTableNameSchemaName404ApplicationJSON])
                res.get_database_pk_table_table_name_schema_name_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkTableTableNameSchemaName422ApplicationJSON])
                res.get_database_pk_table_table_name_schema_name_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatabasePkTableTableNameSchemaName500ApplicationJSON])
                res.get_database_pk_table_table_name_schema_name_500_application_json_object = out

        return res

    
    def get_dataset_(self, request: operations.GetDatasetRequest) -> operations.GetDatasetResponse:
        r"""Get a list of models
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dataset/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatasetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDataset200ApplicationJSON])
                res.get_dataset_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDataset400ApplicationJSON])
                res.get_dataset_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDataset401ApplicationJSON])
                res.get_dataset_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDataset422ApplicationJSON])
                res.get_dataset_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDataset500ApplicationJSON])
                res.get_dataset_500_application_json_object = out

        return res

    
    def get_dataset_distinct_column_name_(self, request: operations.GetDatasetDistinctColumnNameRequest) -> operations.GetDatasetDistinctColumnNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dataset/distinct/{column_name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatasetDistinctColumnNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistincResponseSchema])
                res.distinc_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetDistinctColumnName400ApplicationJSON])
                res.get_dataset_distinct_column_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetDistinctColumnName401ApplicationJSON])
                res.get_dataset_distinct_column_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetDistinctColumnName404ApplicationJSON])
                res.get_dataset_distinct_column_name_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetDistinctColumnName500ApplicationJSON])
                res.get_dataset_distinct_column_name_500_application_json_object = out

        return res

    
    def get_dataset_export_(self, request: operations.GetDatasetExportRequest) -> operations.GetDatasetExportResponse:
        r"""Exports multiple datasets and downloads them as YAML files
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dataset/export/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatasetExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.get_dataset_export_200_text_plain_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetExport400ApplicationJSON])
                res.get_dataset_export_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetExport401ApplicationJSON])
                res.get_dataset_export_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetExport404ApplicationJSON])
                res.get_dataset_export_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetExport500ApplicationJSON])
                res.get_dataset_export_500_application_json_object = out

        return res

    
    def get_dataset_info(self, request: operations.GetDatasetInfoRequest) -> operations.GetDatasetInfoResponse:
        r"""Get metadata information about this API resource
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dataset/_info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatasetInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetInfo200ApplicationJSON])
                res.get_dataset_info_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetInfo400ApplicationJSON])
                res.get_dataset_info_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetInfo401ApplicationJSON])
                res.get_dataset_info_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetInfo422ApplicationJSON])
                res.get_dataset_info_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetInfo500ApplicationJSON])
                res.get_dataset_info_500_application_json_object = out

        return res

    
    def get_dataset_pk_(self, request: operations.GetDatasetPkRequest) -> operations.GetDatasetPkResponse:
        r"""Get an item model
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dataset/{pk}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatasetPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetPk200ApplicationJSON])
                res.get_dataset_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetPk400ApplicationJSON])
                res.get_dataset_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetPk401ApplicationJSON])
                res.get_dataset_pk_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetPk404ApplicationJSON])
                res.get_dataset_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetPk422ApplicationJSON])
                res.get_dataset_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetPk500ApplicationJSON])
                res.get_dataset_pk_500_application_json_object = out

        return res

    
    def get_dataset_pk_related_objects(self, request: operations.GetDatasetPkRelatedObjectsRequest) -> operations.GetDatasetPkRelatedObjectsResponse:
        r"""Get charts and dashboards count associated to a dataset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dataset/{pk}/related_objects", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatasetPkRelatedObjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DatasetRelatedObjectsResponse])
                res.dataset_related_objects_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetPkRelatedObjects401ApplicationJSON])
                res.get_dataset_pk_related_objects_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetPkRelatedObjects404ApplicationJSON])
                res.get_dataset_pk_related_objects_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetPkRelatedObjects500ApplicationJSON])
                res.get_dataset_pk_related_objects_500_application_json_object = out

        return res

    
    def get_dataset_related_column_name_(self, request: operations.GetDatasetRelatedColumnNameRequest) -> operations.GetDatasetRelatedColumnNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dataset/related/{column_name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatasetRelatedColumnNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedResponseSchema])
                res.related_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetRelatedColumnName400ApplicationJSON])
                res.get_dataset_related_column_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetRelatedColumnName401ApplicationJSON])
                res.get_dataset_related_column_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetRelatedColumnName404ApplicationJSON])
                res.get_dataset_related_column_name_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatasetRelatedColumnName500ApplicationJSON])
                res.get_dataset_related_column_name_500_application_json_object = out

        return res

    
    def get_log_(self, request: operations.GetLogRequest) -> operations.GetLogResponse:
        r"""Get a list of models
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/log/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLog200ApplicationJSON])
                res.get_log_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLog400ApplicationJSON])
                res.get_log_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLog401ApplicationJSON])
                res.get_log_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLog422ApplicationJSON])
                res.get_log_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLog500ApplicationJSON])
                res.get_log_500_application_json_object = out

        return res

    
    def get_log_pk_(self, request: operations.GetLogPkRequest) -> operations.GetLogPkResponse:
        r"""Get an item model
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/log/{pk}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLogPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLogPk200ApplicationJSON])
                res.get_log_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLogPk400ApplicationJSON])
                res.get_log_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLogPk401ApplicationJSON])
                res.get_log_pk_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLogPk404ApplicationJSON])
                res.get_log_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLogPk422ApplicationJSON])
                res.get_log_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLogPk500ApplicationJSON])
                res.get_log_pk_500_application_json_object = out

        return res

    
    def get_menu_(self, request: operations.GetMenuRequest) -> operations.GetMenuResponse:
        r"""Get the menu data structure. Returns a forest like structure with the menu the user has access to
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/menu/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMenuResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMenu200ApplicationJSON])
                res.get_menu_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMenu401ApplicationJSON])
                res.get_menu_401_application_json_object = out

        return res

    
    def get_openapi_version_openapi(self, request: operations.GetOpenapiVersionOpenapiRequest) -> operations.GetOpenapiVersionOpenapiResponse:
        r"""Get the OpenAPI spec for a specific API version
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/openapi/{version}/_openapi", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOpenapiVersionOpenapiResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_openapi_version_openapi_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetOpenapiVersionOpenapi404ApplicationJSON])
                res.get_openapi_version_openapi_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetOpenapiVersionOpenapi500ApplicationJSON])
                res.get_openapi_version_openapi_500_application_json_object = out

        return res

    
    def get_query_(self, request: operations.GetQueryRequest) -> operations.GetQueryResponse:
        r"""Get a list of queries, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/query/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQuery200ApplicationJSON])
                res.get_query_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQuery400ApplicationJSON])
                res.get_query_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQuery401ApplicationJSON])
                res.get_query_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQuery422ApplicationJSON])
                res.get_query_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQuery500ApplicationJSON])
                res.get_query_500_application_json_object = out

        return res

    
    def get_query_distinct_column_name_(self, request: operations.GetQueryDistinctColumnNameRequest) -> operations.GetQueryDistinctColumnNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/query/distinct/{column_name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueryDistinctColumnNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistincResponseSchema])
                res.distinc_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryDistinctColumnName400ApplicationJSON])
                res.get_query_distinct_column_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryDistinctColumnName401ApplicationJSON])
                res.get_query_distinct_column_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryDistinctColumnName404ApplicationJSON])
                res.get_query_distinct_column_name_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryDistinctColumnName500ApplicationJSON])
                res.get_query_distinct_column_name_500_application_json_object = out

        return res

    
    def get_query_pk_(self, request: operations.GetQueryPkRequest) -> operations.GetQueryPkResponse:
        r"""Get query detail information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/query/{pk}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueryPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryPk200ApplicationJSON])
                res.get_query_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryPk400ApplicationJSON])
                res.get_query_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryPk401ApplicationJSON])
                res.get_query_pk_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryPk404ApplicationJSON])
                res.get_query_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryPk422ApplicationJSON])
                res.get_query_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryPk500ApplicationJSON])
                res.get_query_pk_500_application_json_object = out

        return res

    
    def get_query_related_column_name_(self, request: operations.GetQueryRelatedColumnNameRequest) -> operations.GetQueryRelatedColumnNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/query/related/{column_name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueryRelatedColumnNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedResponseSchema])
                res.related_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryRelatedColumnName400ApplicationJSON])
                res.get_query_related_column_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryRelatedColumnName401ApplicationJSON])
                res.get_query_related_column_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryRelatedColumnName404ApplicationJSON])
                res.get_query_related_column_name_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQueryRelatedColumnName500ApplicationJSON])
                res.get_query_related_column_name_500_application_json_object = out

        return res

    
    def get_report_(self, request: operations.GetReportRequest) -> operations.GetReportResponse:
        r"""Get a list of report schedules, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/report/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReport200ApplicationJSON])
                res.get_report_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReport400ApplicationJSON])
                res.get_report_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReport401ApplicationJSON])
                res.get_report_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReport422ApplicationJSON])
                res.get_report_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReport500ApplicationJSON])
                res.get_report_500_application_json_object = out

        return res

    
    def get_report_info(self, request: operations.GetReportInfoRequest) -> operations.GetReportInfoResponse:
        r"""Get metadata information about this API resource
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/report/_info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportInfo200ApplicationJSON])
                res.get_report_info_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportInfo400ApplicationJSON])
                res.get_report_info_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportInfo401ApplicationJSON])
                res.get_report_info_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportInfo422ApplicationJSON])
                res.get_report_info_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportInfo500ApplicationJSON])
                res.get_report_info_500_application_json_object = out

        return res

    
    def get_report_pk_(self, request: operations.GetReportPkRequest) -> operations.GetReportPkResponse:
        r"""Get a report schedule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/report/{pk}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPk200ApplicationJSON])
                res.get_report_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPk400ApplicationJSON])
                res.get_report_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPk401ApplicationJSON])
                res.get_report_pk_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPk404ApplicationJSON])
                res.get_report_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPk422ApplicationJSON])
                res.get_report_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPk500ApplicationJSON])
                res.get_report_pk_500_application_json_object = out

        return res

    
    def get_report_pk_log_(self, request: operations.GetReportPkLogRequest) -> operations.GetReportPkLogResponse:
        r"""Get a list of report schedule logs, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/report/{pk}/log/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportPkLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPkLog200ApplicationJSON])
                res.get_report_pk_log_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPkLog400ApplicationJSON])
                res.get_report_pk_log_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPkLog401ApplicationJSON])
                res.get_report_pk_log_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPkLog422ApplicationJSON])
                res.get_report_pk_log_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPkLog500ApplicationJSON])
                res.get_report_pk_log_500_application_json_object = out

        return res

    
    def get_report_pk_log_log_id_(self, request: operations.GetReportPkLogLogIDRequest) -> operations.GetReportPkLogLogIDResponse:
        r"""Get a report schedule log
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/report/{pk}/log/{log_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportPkLogLogIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPkLogLogID200ApplicationJSON])
                res.get_report_pk_log_log_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPkLogLogID400ApplicationJSON])
                res.get_report_pk_log_log_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPkLogLogID401ApplicationJSON])
                res.get_report_pk_log_log_id_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPkLogLogID404ApplicationJSON])
                res.get_report_pk_log_log_id_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPkLogLogID422ApplicationJSON])
                res.get_report_pk_log_log_id_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportPkLogLogID500ApplicationJSON])
                res.get_report_pk_log_log_id_500_application_json_object = out

        return res

    
    def get_report_related_column_name_(self, request: operations.GetReportRelatedColumnNameRequest) -> operations.GetReportRelatedColumnNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/report/related/{column_name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportRelatedColumnNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedResponseSchema])
                res.related_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportRelatedColumnName400ApplicationJSON])
                res.get_report_related_column_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportRelatedColumnName401ApplicationJSON])
                res.get_report_related_column_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportRelatedColumnName404ApplicationJSON])
                res.get_report_related_column_name_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportRelatedColumnName500ApplicationJSON])
                res.get_report_related_column_name_500_application_json_object = out

        return res

    
    def get_saved_query_(self, request: operations.GetSavedQueryRequest) -> operations.GetSavedQueryResponse:
        r"""Get a list of saved queries, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/saved_query/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSavedQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQuery200ApplicationJSON])
                res.get_saved_query_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQuery400ApplicationJSON])
                res.get_saved_query_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQuery401ApplicationJSON])
                res.get_saved_query_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQuery422ApplicationJSON])
                res.get_saved_query_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQuery500ApplicationJSON])
                res.get_saved_query_500_application_json_object = out

        return res

    
    def get_saved_query_distinct_column_name_(self, request: operations.GetSavedQueryDistinctColumnNameRequest) -> operations.GetSavedQueryDistinctColumnNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/saved_query/distinct/{column_name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSavedQueryDistinctColumnNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistincResponseSchema])
                res.distinc_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryDistinctColumnName400ApplicationJSON])
                res.get_saved_query_distinct_column_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryDistinctColumnName401ApplicationJSON])
                res.get_saved_query_distinct_column_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryDistinctColumnName404ApplicationJSON])
                res.get_saved_query_distinct_column_name_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryDistinctColumnName500ApplicationJSON])
                res.get_saved_query_distinct_column_name_500_application_json_object = out

        return res

    
    def get_saved_query_export_(self, request: operations.GetSavedQueryExportRequest) -> operations.GetSavedQueryExportResponse:
        r"""Exports multiple saved queries and downloads them as YAML files
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/saved_query/export/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSavedQueryExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.get_saved_query_export_200_application_zip_binary_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryExport400ApplicationJSON])
                res.get_saved_query_export_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryExport401ApplicationJSON])
                res.get_saved_query_export_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryExport404ApplicationJSON])
                res.get_saved_query_export_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryExport500ApplicationJSON])
                res.get_saved_query_export_500_application_json_object = out

        return res

    
    def get_saved_query_info(self, request: operations.GetSavedQueryInfoRequest) -> operations.GetSavedQueryInfoResponse:
        r"""Get metadata information about this API resource
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/saved_query/_info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSavedQueryInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryInfo200ApplicationJSON])
                res.get_saved_query_info_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryInfo400ApplicationJSON])
                res.get_saved_query_info_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryInfo401ApplicationJSON])
                res.get_saved_query_info_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryInfo422ApplicationJSON])
                res.get_saved_query_info_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryInfo500ApplicationJSON])
                res.get_saved_query_info_500_application_json_object = out

        return res

    
    def get_saved_query_pk_(self, request: operations.GetSavedQueryPkRequest) -> operations.GetSavedQueryPkResponse:
        r"""Get a saved query
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/saved_query/{pk}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSavedQueryPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryPk200ApplicationJSON])
                res.get_saved_query_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryPk400ApplicationJSON])
                res.get_saved_query_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryPk401ApplicationJSON])
                res.get_saved_query_pk_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryPk404ApplicationJSON])
                res.get_saved_query_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryPk422ApplicationJSON])
                res.get_saved_query_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryPk500ApplicationJSON])
                res.get_saved_query_pk_500_application_json_object = out

        return res

    
    def get_saved_query_related_column_name_(self, request: operations.GetSavedQueryRelatedColumnNameRequest) -> operations.GetSavedQueryRelatedColumnNameResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/saved_query/related/{column_name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSavedQueryRelatedColumnNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedResponseSchema])
                res.related_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryRelatedColumnName400ApplicationJSON])
                res.get_saved_query_related_column_name_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryRelatedColumnName401ApplicationJSON])
                res.get_saved_query_related_column_name_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryRelatedColumnName404ApplicationJSON])
                res.get_saved_query_related_column_name_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedQueryRelatedColumnName500ApplicationJSON])
                res.get_saved_query_related_column_name_500_application_json_object = out

        return res

    
    def get_security_csrf_token_(self, request: operations.GetSecurityCsrfTokenRequest) -> operations.GetSecurityCsrfTokenResponse:
        r"""Fetch the CSRF token
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/security/csrf_token/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSecurityCsrfTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSecurityCsrfToken200ApplicationJSON])
                res.get_security_csrf_token_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSecurityCsrfToken401ApplicationJSON])
                res.get_security_csrf_token_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSecurityCsrfToken500ApplicationJSON])
                res.get_security_csrf_token_500_application_json_object = out

        return res

    
    def post_annotation_layer_(self, request: operations.PostAnnotationLayerRequest) -> operations.PostAnnotationLayerResponse:
        r"""Create an Annotation layer
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/annotation_layer/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAnnotationLayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnotationLayer201ApplicationJSON])
                res.post_annotation_layer_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnotationLayer400ApplicationJSON])
                res.post_annotation_layer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnotationLayer401ApplicationJSON])
                res.post_annotation_layer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnotationLayer404ApplicationJSON])
                res.post_annotation_layer_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnotationLayer500ApplicationJSON])
                res.post_annotation_layer_500_application_json_object = out

        return res

    
    def post_annotation_layer_pk_annotation_(self, request: operations.PostAnnotationLayerPkAnnotationRequest) -> operations.PostAnnotationLayerPkAnnotationResponse:
        r"""Create an Annotation layer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotation_layer/{pk}/annotation/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAnnotationLayerPkAnnotationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnotationLayerPkAnnotation201ApplicationJSON])
                res.post_annotation_layer_pk_annotation_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnotationLayerPkAnnotation400ApplicationJSON])
                res.post_annotation_layer_pk_annotation_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnotationLayerPkAnnotation401ApplicationJSON])
                res.post_annotation_layer_pk_annotation_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnotationLayerPkAnnotation404ApplicationJSON])
                res.post_annotation_layer_pk_annotation_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnotationLayerPkAnnotation500ApplicationJSON])
                res.post_annotation_layer_pk_annotation_500_application_json_object = out

        return res

    
    def post_cachekey_invalidate(self, request: operations.PostCachekeyInvalidateRequest) -> operations.PostCachekeyInvalidateResponse:
        r"""Takes a list of datasources, finds the associated cache records and invalidates them and removes the database records
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cachekey/invalidate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCachekeyInvalidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCachekeyInvalidate400ApplicationJSON])
                res.post_cachekey_invalidate_400_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCachekeyInvalidate500ApplicationJSON])
                res.post_cachekey_invalidate_500_application_json_object = out

        return res

    
    def post_chart_(self, request: operations.PostChartRequest) -> operations.PostChartResponse:
        r"""Create a new Chart.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chart/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostChartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChart201ApplicationJSON])
                res.post_chart_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChart400ApplicationJSON])
                res.post_chart_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChart401ApplicationJSON])
                res.post_chart_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChart422ApplicationJSON])
                res.post_chart_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChart500ApplicationJSON])
                res.post_chart_500_application_json_object = out

        return res

    
    def post_chart_data(self, request: operations.PostChartDataRequest) -> operations.PostChartDataResponse:
        r"""Takes a query context constructed in the client and returns payload data response for the given query.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chart/data"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostChartDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChartDataResponseSchema])
                res.chart_data_response_schema = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChartDataAsyncResponseSchema])
                res.chart_data_async_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChartData400ApplicationJSON])
                res.post_chart_data_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChartData401ApplicationJSON])
                res.post_chart_data_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChartData500ApplicationJSON])
                res.post_chart_data_500_application_json_object = out

        return res

    
    def post_chart_import_(self, request: operations.PostChartImportRequest) -> operations.PostChartImportResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chart/import/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostChartImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChartImport200ApplicationJSON])
                res.post_chart_import_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChartImport400ApplicationJSON])
                res.post_chart_import_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChartImport401ApplicationJSON])
                res.post_chart_import_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChartImport422ApplicationJSON])
                res.post_chart_import_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChartImport500ApplicationJSON])
                res.post_chart_import_500_application_json_object = out

        return res

    
    def post_css_template_(self, request: operations.PostCSSTemplateRequest) -> operations.PostCSSTemplateResponse:
        r"""Create a CSS template
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/css_template/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCSSTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCSSTemplate201ApplicationJSON])
                res.post_css_template_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCSSTemplate400ApplicationJSON])
                res.post_css_template_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCSSTemplate401ApplicationJSON])
                res.post_css_template_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCSSTemplate422ApplicationJSON])
                res.post_css_template_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCSSTemplate500ApplicationJSON])
                res.post_css_template_500_application_json_object = out

        return res

    
    def post_dashboard_(self, request: operations.PostDashboardRequest) -> operations.PostDashboardResponse:
        r"""Create a new Dashboard.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dashboard/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDashboardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDashboard201ApplicationJSON])
                res.post_dashboard_201_application_json_object = out
        elif r.status_code == 302:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDashboard400ApplicationJSON])
                res.post_dashboard_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDashboard401ApplicationJSON])
                res.post_dashboard_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDashboard404ApplicationJSON])
                res.post_dashboard_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDashboard500ApplicationJSON])
                res.post_dashboard_500_application_json_object = out

        return res

    
    def post_dashboard_import_(self, request: operations.PostDashboardImportRequest) -> operations.PostDashboardImportResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dashboard/import/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDashboardImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDashboardImport200ApplicationJSON])
                res.post_dashboard_import_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDashboardImport400ApplicationJSON])
                res.post_dashboard_import_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDashboardImport401ApplicationJSON])
                res.post_dashboard_import_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDashboardImport422ApplicationJSON])
                res.post_dashboard_import_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDashboardImport500ApplicationJSON])
                res.post_dashboard_import_500_application_json_object = out

        return res

    
    def post_database_(self, request: operations.PostDatabaseRequest) -> operations.PostDatabaseResponse:
        r"""Create a new Database.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/database/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDatabaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabase201ApplicationJSON])
                res.post_database_201_application_json_object = out
        elif r.status_code == 302:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabase400ApplicationJSON])
                res.post_database_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabase401ApplicationJSON])
                res.post_database_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabase404ApplicationJSON])
                res.post_database_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabase500ApplicationJSON])
                res.post_database_500_application_json_object = out

        return res

    
    def post_database_import_(self, request: operations.PostDatabaseImportRequest) -> operations.PostDatabaseImportResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/database/import/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDatabaseImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabaseImport200ApplicationJSON])
                res.post_database_import_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabaseImport400ApplicationJSON])
                res.post_database_import_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabaseImport401ApplicationJSON])
                res.post_database_import_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabaseImport422ApplicationJSON])
                res.post_database_import_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabaseImport500ApplicationJSON])
                res.post_database_import_500_application_json_object = out

        return res

    
    def post_database_test_connection(self, request: operations.PostDatabaseTestConnectionRequest) -> operations.PostDatabaseTestConnectionResponse:
        r"""Tests a database connection
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/database/test_connection"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDatabaseTestConnectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabaseTestConnection200ApplicationJSON])
                res.post_database_test_connection_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabaseTestConnection400ApplicationJSON])
                res.post_database_test_connection_400_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabaseTestConnection422ApplicationJSON])
                res.post_database_test_connection_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabaseTestConnection500ApplicationJSON])
                res.post_database_test_connection_500_application_json_object = out

        return res

    
    def post_database_validate_parameters(self, request: operations.PostDatabaseValidateParametersRequest) -> operations.PostDatabaseValidateParametersResponse:
        r"""Validates parameters used to connect to a database
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/database/validate_parameters"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDatabaseValidateParametersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabaseValidateParameters200ApplicationJSON])
                res.post_database_validate_parameters_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabaseValidateParameters400ApplicationJSON])
                res.post_database_validate_parameters_400_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabaseValidateParameters422ApplicationJSON])
                res.post_database_validate_parameters_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatabaseValidateParameters500ApplicationJSON])
                res.post_database_validate_parameters_500_application_json_object = out

        return res

    
    def post_dataset_(self, request: operations.PostDatasetRequest) -> operations.PostDatasetResponse:
        r"""Create a new Dataset
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dataset/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDatasetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDataset201ApplicationJSON])
                res.post_dataset_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDataset400ApplicationJSON])
                res.post_dataset_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDataset401ApplicationJSON])
                res.post_dataset_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDataset422ApplicationJSON])
                res.post_dataset_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDataset500ApplicationJSON])
                res.post_dataset_500_application_json_object = out

        return res

    
    def post_dataset_import_(self, request: operations.PostDatasetImportRequest) -> operations.PostDatasetImportResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dataset/import/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDatasetImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatasetImport200ApplicationJSON])
                res.post_dataset_import_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatasetImport400ApplicationJSON])
                res.post_dataset_import_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatasetImport401ApplicationJSON])
                res.post_dataset_import_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatasetImport422ApplicationJSON])
                res.post_dataset_import_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDatasetImport500ApplicationJSON])
                res.post_dataset_import_500_application_json_object = out

        return res

    
    def post_log_(self, request: operations.PostLogRequest) -> operations.PostLogResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/log/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLog201ApplicationJSON])
                res.post_log_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLog400ApplicationJSON])
                res.post_log_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLog401ApplicationJSON])
                res.post_log_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLog422ApplicationJSON])
                res.post_log_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLog500ApplicationJSON])
                res.post_log_500_application_json_object = out

        return res

    
    def post_report_(self, request: operations.PostReportRequest) -> operations.PostReportResponse:
        r"""Create a report schedule
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/report/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostReport201ApplicationJSON])
                res.post_report_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostReport400ApplicationJSON])
                res.post_report_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostReport401ApplicationJSON])
                res.post_report_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostReport404ApplicationJSON])
                res.post_report_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostReport500ApplicationJSON])
                res.post_report_500_application_json_object = out

        return res

    
    def post_saved_query_(self, request: operations.PostSavedQueryRequest) -> operations.PostSavedQueryResponse:
        r"""Create a saved query
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/saved_query/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSavedQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSavedQuery201ApplicationJSON])
                res.post_saved_query_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSavedQuery400ApplicationJSON])
                res.post_saved_query_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSavedQuery401ApplicationJSON])
                res.post_saved_query_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSavedQuery422ApplicationJSON])
                res.post_saved_query_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSavedQuery500ApplicationJSON])
                res.post_saved_query_500_application_json_object = out

        return res

    
    def post_saved_query_import_(self, request: operations.PostSavedQueryImportRequest) -> operations.PostSavedQueryImportResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/saved_query/import/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSavedQueryImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSavedQueryImport200ApplicationJSON])
                res.post_saved_query_import_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSavedQueryImport400ApplicationJSON])
                res.post_saved_query_import_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSavedQueryImport401ApplicationJSON])
                res.post_saved_query_import_401_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSavedQueryImport422ApplicationJSON])
                res.post_saved_query_import_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSavedQueryImport500ApplicationJSON])
                res.post_saved_query_import_500_application_json_object = out

        return res

    
    def post_security_login(self, request: operations.PostSecurityLoginRequest) -> operations.PostSecurityLoginResponse:
        r"""Authenticate and get a JWT access and refresh token
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/security/login"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSecurityLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSecurityLogin200ApplicationJSON])
                res.post_security_login_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSecurityLogin400ApplicationJSON])
                res.post_security_login_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSecurityLogin401ApplicationJSON])
                res.post_security_login_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSecurityLogin500ApplicationJSON])
                res.post_security_login_500_application_json_object = out

        return res

    
    def post_security_refresh(self, request: operations.PostSecurityRefreshRequest) -> operations.PostSecurityRefreshResponse:
        r"""Use the refresh token to get a new JWT access token
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/security/refresh"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSecurityRefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSecurityRefresh200ApplicationJSON])
                res.post_security_refresh_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSecurityRefresh401ApplicationJSON])
                res.post_security_refresh_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSecurityRefresh500ApplicationJSON])
                res.post_security_refresh_500_application_json_object = out

        return res

    
    def put_annotation_layer_pk_(self, request: operations.PutAnnotationLayerPkRequest) -> operations.PutAnnotationLayerPkResponse:
        r"""Update an Annotation layer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotation_layer/{pk}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAnnotationLayerPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAnnotationLayerPk200ApplicationJSON])
                res.put_annotation_layer_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAnnotationLayerPk400ApplicationJSON])
                res.put_annotation_layer_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAnnotationLayerPk401ApplicationJSON])
                res.put_annotation_layer_pk_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAnnotationLayerPk404ApplicationJSON])
                res.put_annotation_layer_pk_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAnnotationLayerPk500ApplicationJSON])
                res.put_annotation_layer_pk_500_application_json_object = out

        return res

    
    def put_annotation_layer_pk_annotation_annotation_id_(self, request: operations.PutAnnotationLayerPkAnnotationAnnotationIDRequest) -> operations.PutAnnotationLayerPkAnnotationAnnotationIDResponse:
        r"""Update an Annotation layer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotation_layer/{pk}/annotation/{annotation_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAnnotationLayerPkAnnotationAnnotationIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAnnotationLayerPkAnnotationAnnotationID200ApplicationJSON])
                res.put_annotation_layer_pk_annotation_annotation_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAnnotationLayerPkAnnotationAnnotationID400ApplicationJSON])
                res.put_annotation_layer_pk_annotation_annotation_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAnnotationLayerPkAnnotationAnnotationID401ApplicationJSON])
                res.put_annotation_layer_pk_annotation_annotation_id_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAnnotationLayerPkAnnotationAnnotationID404ApplicationJSON])
                res.put_annotation_layer_pk_annotation_annotation_id_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAnnotationLayerPkAnnotationAnnotationID500ApplicationJSON])
                res.put_annotation_layer_pk_annotation_annotation_id_500_application_json_object = out

        return res

    
    def put_chart_pk_(self, request: operations.PutChartPkRequest) -> operations.PutChartPkResponse:
        r"""Changes a Chart.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chart/{pk}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutChartPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutChartPk200ApplicationJSON])
                res.put_chart_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutChartPk400ApplicationJSON])
                res.put_chart_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutChartPk401ApplicationJSON])
                res.put_chart_pk_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutChartPk403ApplicationJSON])
                res.put_chart_pk_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutChartPk404ApplicationJSON])
                res.put_chart_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutChartPk422ApplicationJSON])
                res.put_chart_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutChartPk500ApplicationJSON])
                res.put_chart_pk_500_application_json_object = out

        return res

    
    def put_css_template_pk_(self, request: operations.PutCSSTemplatePkRequest) -> operations.PutCSSTemplatePkResponse:
        r"""Update a CSS template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/css_template/{pk}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCSSTemplatePkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCSSTemplatePk200ApplicationJSON])
                res.put_css_template_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCSSTemplatePk400ApplicationJSON])
                res.put_css_template_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCSSTemplatePk401ApplicationJSON])
                res.put_css_template_pk_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCSSTemplatePk404ApplicationJSON])
                res.put_css_template_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCSSTemplatePk422ApplicationJSON])
                res.put_css_template_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCSSTemplatePk500ApplicationJSON])
                res.put_css_template_pk_500_application_json_object = out

        return res

    
    def put_dashboard_pk_(self, request: operations.PutDashboardPkRequest) -> operations.PutDashboardPkResponse:
        r"""Changes a Dashboard.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dashboard/{pk}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDashboardPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDashboardPk200ApplicationJSON])
                res.put_dashboard_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDashboardPk400ApplicationJSON])
                res.put_dashboard_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDashboardPk401ApplicationJSON])
                res.put_dashboard_pk_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDashboardPk403ApplicationJSON])
                res.put_dashboard_pk_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDashboardPk404ApplicationJSON])
                res.put_dashboard_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDashboardPk422ApplicationJSON])
                res.put_dashboard_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDashboardPk500ApplicationJSON])
                res.put_dashboard_pk_500_application_json_object = out

        return res

    
    def put_database_pk_(self, request: operations.PutDatabasePkRequest) -> operations.PutDatabasePkResponse:
        r"""Changes a Database.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/{pk}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDatabasePkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatabasePk200ApplicationJSON])
                res.put_database_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatabasePk400ApplicationJSON])
                res.put_database_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatabasePk401ApplicationJSON])
                res.put_database_pk_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatabasePk403ApplicationJSON])
                res.put_database_pk_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatabasePk404ApplicationJSON])
                res.put_database_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatabasePk422ApplicationJSON])
                res.put_database_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatabasePk500ApplicationJSON])
                res.put_database_pk_500_application_json_object = out

        return res

    
    def put_dataset_pk_(self, request: operations.PutDatasetPkRequest) -> operations.PutDatasetPkResponse:
        r"""Changes a Dataset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dataset/{pk}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDatasetPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatasetPk200ApplicationJSON])
                res.put_dataset_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatasetPk400ApplicationJSON])
                res.put_dataset_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatasetPk401ApplicationJSON])
                res.put_dataset_pk_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatasetPk403ApplicationJSON])
                res.put_dataset_pk_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatasetPk404ApplicationJSON])
                res.put_dataset_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatasetPk422ApplicationJSON])
                res.put_dataset_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatasetPk500ApplicationJSON])
                res.put_dataset_pk_500_application_json_object = out

        return res

    
    def put_dataset_pk_refresh(self, request: operations.PutDatasetPkRefreshRequest) -> operations.PutDatasetPkRefreshResponse:
        r"""Refreshes and updates columns of a dataset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dataset/{pk}/refresh", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDatasetPkRefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatasetPkRefresh200ApplicationJSON])
                res.put_dataset_pk_refresh_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatasetPkRefresh401ApplicationJSON])
                res.put_dataset_pk_refresh_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatasetPkRefresh403ApplicationJSON])
                res.put_dataset_pk_refresh_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatasetPkRefresh404ApplicationJSON])
                res.put_dataset_pk_refresh_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatasetPkRefresh422ApplicationJSON])
                res.put_dataset_pk_refresh_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutDatasetPkRefresh500ApplicationJSON])
                res.put_dataset_pk_refresh_500_application_json_object = out

        return res

    
    def put_report_pk_(self, request: operations.PutReportPkRequest) -> operations.PutReportPkResponse:
        r"""Update a report schedule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/report/{pk}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutReportPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutReportPk200ApplicationJSON])
                res.put_report_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutReportPk400ApplicationJSON])
                res.put_report_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutReportPk401ApplicationJSON])
                res.put_report_pk_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutReportPk403ApplicationJSON])
                res.put_report_pk_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutReportPk404ApplicationJSON])
                res.put_report_pk_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutReportPk500ApplicationJSON])
                res.put_report_pk_500_application_json_object = out

        return res

    
    def put_saved_query_pk_(self, request: operations.PutSavedQueryPkRequest) -> operations.PutSavedQueryPkResponse:
        r"""Update a saved query
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/saved_query/{pk}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSavedQueryPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutSavedQueryPk200ApplicationJSON])
                res.put_saved_query_pk_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutSavedQueryPk400ApplicationJSON])
                res.put_saved_query_pk_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutSavedQueryPk401ApplicationJSON])
                res.put_saved_query_pk_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutSavedQueryPk404ApplicationJSON])
                res.put_saved_query_pk_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutSavedQueryPk422ApplicationJSON])
                res.put_saved_query_pk_422_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutSavedQueryPk500ApplicationJSON])
                res.put_saved_query_pk_500_application_json_object = out

        return res

    