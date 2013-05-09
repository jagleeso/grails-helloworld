<%@ page import="helloworld.User" %>



<div class="fieldcontain ${hasErrors(bean: userInstance, field: 'favouriteNumber', 'error')} required">
	<label for="favouriteNumber">
		<g:message code="user.favouriteNumber.label" default="Favourite Number" />
		<span class="required-indicator">*</span>
	</label>
	<g:field name="favouriteNumber" type="number" value="${userInstance.favouriteNumber}" required=""/>
</div>

<div class="fieldcontain ${hasErrors(bean: userInstance, field: 'password', 'error')} ">
	<label for="password">
		<g:message code="user.password.label" default="Password" />
		
	</label>
	<g:textField name="password" value="${userInstance?.password}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: userInstance, field: 'username', 'error')} ">
	<label for="username">
		<g:message code="user.username.label" default="Username" />
		
	</label>
	<g:textField name="username" value="${userInstance?.username}"/>
</div>

