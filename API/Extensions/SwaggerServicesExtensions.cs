namespace API.Extensions
{
    public static class SwaggerServicesExtensions

    {
        public static IServiceCollection AddSwaggerDocumentation(this IServiceCollection services)
        {
            services.AddSwaggerGen();
            return services;
        }

        public static IApplicationBuilder UseSwaggerDocumentation(this IApplicationBuilder builder)
        {
            builder.UseSwagger();
            builder.UseSwaggerUI();

            return builder;
        }
    }
}