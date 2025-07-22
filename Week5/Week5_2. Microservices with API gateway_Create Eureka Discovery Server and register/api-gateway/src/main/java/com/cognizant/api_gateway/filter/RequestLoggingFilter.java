package com.cognizant.api_gateway.filter;

import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.logging.Logger;

@Component
@Order(1)
public class RequestLoggingFilter implements GlobalFilter {

    private final Logger logger = Logger.getLogger(RequestLoggingFilter.class.getName());

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, org.springframework.cloud.gateway.filter.GatewayFilterChain chain) {
        logger.info("Incoming Request: " + exchange.getRequest().getMethod() + " " + exchange.getRequest().getURI());
        return chain.filter(exchange);
    }
}
